/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserhasgameManager extends AbstractManager {
  static table = "users_has_games";

  insert(users_has_games) {
    return this.connection.query(
      `INSERT INTO ${UserhasgameManager.table} (users_id, games_id) VALUES (?, ?)`,
      [users_has_games.users_id, users_has_games.games_id]
    );
  }

  update(users_has_games) {
    return this.connection.query(
      `UPDATE ${UserhasgameManager.table} SET users_id = ?, games_id = ?, WHERE id = ?`,
      [users_has_games.users_id, users_has_games.games_id, users_has_games.id]
    );
  }
}

module.exports = UserhasgameManager;
