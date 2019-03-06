/**
 * User model
 */
class User {
  constructor(data = {}) {
    this.id = null;
    this.name = null;
    this.username = null;
    this.token = null;
    this.status = null;
    this.creation_date = null;
    this.games = null;
    this.moves = null;
    this.password=null;
    this.date_birth=null;
    this.log_allowed=false;
    Object.assign(this, data);
  }
}
export default User;
