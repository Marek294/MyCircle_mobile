import bookshelf from '../bookshelf';
import circleUser from './circleUser';
import user from './user';

bookshelf.plugin('pagination');

export default bookshelf.Model.extend({
  tableName: 'posts',
  circleUser: function() {
    return this.belongsTo(circleUser, 'circle_id');
  },
  user: function() {
    return this.belongsTo(user, 'user_id');
  }
})
