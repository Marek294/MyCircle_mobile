import Circle from '../models/circle';
import CircleUser from '../models/circleUser';
import Post from '../models/post';
import Commentary from '../models/commentary';
import VoteHistory from '../models/voteHistory';
import User from '../models/user';

export default {
  addUserToCircle: function (circleId, userId, isAdmin, req, res) {
    CircleUser.query({
      where: { circle_id: circleId},
      andWhere: { user_id: userId}
    }).fetch()
      .then(circleUser => {
        if(circleUser) res.status(500).json({errors: "User is already added to circle"});
        else {
          CircleUser.forge({
            circle_id: circleId,
            user_id: userId,
            is_admin: isAdmin
          }, {hasTimestamps: true}).save()
            .then(circleUser => {
              res.json(circleUser);
            })
            .catch(err => {
              res.status(500).json(err);
            })
        }
      });
  },

  addUserToCircleFrontEnd: function (circleId, usernameOrEmail, isAdmin, req, res) {
    User.query({
      where: { username: usernameOrEmail },
      orWhere: { email: usernameOrEmail }
    }).fetch().then(user => {
      CircleUser.query({
        where: { circle_id: circleId},
        andWhere: { user_id: user.id }
      }).fetch()
        .then(circleUser => {
          if(circleUser) res.status(500).json({errors: "User is already added to circle"});
          else {
            CircleUser.forge({
              circle_id: circleId,
              user_id: user.id,
              is_admin: isAdmin
            }, {hasTimestamps: true}).save()
              .then(circleUser => {
                res.json(circleUser);
              })
              .catch(err => {
                res.status(500).json(err);
              })
          }
        });
    });
  },

  addCircle: function (name, isPublic, req, res) {
    Circle.forge({
      owner_id: req.currentUser.id,
      name: name,
      is_public: isPublic
    }, {hasTimestamps: true}).save()
      .then(circle => {
        CircleUser.forge({
          circle_id: circle.id,
          user_id: req.currentUser.id,
          is_admin: true
        }, {hasTimestamps: true}).save();

          return res.json(circle);

      })
      .catch(err => {
        res.status(500).json(err);
      })
  },

  updateCircle: function (name, isPublic, req, res) {
    Circle.query({
      where: {id: req.params.id},
      andWhere: {owner_id: req.currentUser.id}
    }).fetch()
      .then(circle => {
        if (circle) {

          circle.save({name: name, is_public: isPublic});
          circle.attributes.name = name;
          circle.attributes.is_public = isPublic;

          res.json(circle);
        }
        else res.status(500).json({errors: "There is no circle with such id or you are not owner"});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  },

  deleteCircle: function (req, res) {
    Circle.query({
      where: {id: req.params.id},
      andWhere: {owner_id: req.currentUser.id}
    }).fetch()
      .then(circle => {
        if (circle) {
          //console.log(circle.attributes.id);
          CircleUser.query({
            where: {circle_id: circle.attributes.id}
          }).fetchAll().then(circleUsers => {
            circleUsers.map(circleUser => {
              circleUser.destroy();
            });

            circle.destroy();
          });

          Post.query({
            where: {circle_id: req.params.id}
          }).fetchAll().then(posts => {
            posts.map(post => {
              Commentary.query({
                where: { post_id: post.get('id') }
              }).fetchAll().then(comments => {
                comments.map(comment => {
                  comment.destroy();
                });
              });

              VoteHistory.query({
                where: { post_id: post.get('id') }
              }).fetchAll().then(histories => {
                histories.map(history => {
                  history.destroy();
                });
              });

              post.destroy();
            })
          });

          return res.json(circle);
        } else {
          res.status(500).json({errors: "There is no circle with such id or you are not owner"});
        }
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}
