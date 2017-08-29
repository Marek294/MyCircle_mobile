import bookshelf from '../bookshelf';
import circle from './circle';
import post from './post';

export default bookshelf.Model.extend({
  tableName: 'circle_users',
  circle: function() {
    return this.belongsTo(circle);
  },
  post: function() {
    return this.hasMany(post, 'circle_id', 'circle_id');
  }
})
