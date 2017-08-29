import bookshelf from '../bookshelf';
import user from './user';

export default bookshelf.Model.extend({
  tableName: 'commentaries',
  user: function() {
    return this.belongsTo(user);
  }
})
