const AbstractManager = require("./AbstractManager");

const PhotoManager = require("./PhotoManager");

class GameManager extends AbstractManager {
  static table = "games";

  insert(game) {
    return this.connection.query(
      `insert into ${GameManager.table} (name, playerNumber, gameplayStyle, editor, ages, duration) values (?, ?, ?, ?, ?, ?)`,
      [
        game.name,
        game.playerNumber,
        game.gameplayStyle,
        game.editor,
        game.ages,
        game.duration,
      ]
    );
  }

  update(game) {
    return this.connection.query(
      `update ${GameManager.table} set (name = ?, playerNumber= ?, gameplayStyle= ?, editor= ?, ages= ?, duration= ?) where id = ?`,
      [
        game.name,
        game.playerNumber,
        game.gameplayStyle,
        game.editor,
        game.ages,
        game.duration,
        game.id,
      ]
    );
  }

  findOneWithPhotos(id) {
    return this.connection.query(
      `SELECT p.id, p.description, p.name, g.id FROM ${PhotoManager.table} AS p JOIN ${GameManager.table} AS g ON p.games_id=g.id WHERE id=?`,
      [id]
    );
  }
}

module.exports = GameManager;
