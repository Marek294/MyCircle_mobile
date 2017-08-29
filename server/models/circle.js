import bookshelf from '../bookshelf';
import circleUser from './circleUser';

export default bookshelf.Model.extend({
  tableName: 'circles',
  circleUser: function() {
    return this.hasMany(circleUser);
  }
})
