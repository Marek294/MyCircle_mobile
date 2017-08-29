import bookshelf from '../bookshelf';
import post from './post';
import commentary from './commentary'

export default bookshelf.Model.extend({
  tableName: 'users',
  post: function() {
    return this.hasMany(post, 'user_id');
  },
  commentary: function() {
    return this.hasMany(commentary);
  }
})
