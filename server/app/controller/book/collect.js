const Controller = require("egg").Controller

class collect extends Controller {
  async index() {
    const data = this.ctx.request.body
    const { username, title, price, picture } = data
    let sql =
      " SELECT username FROM bookshelf WHERE username = '" +
      username +
      "'and title = '" +
      title +
      "'"

    const res = await this.app.mysql.query(sql)
    if (res.length != 0) {
      const result = await this.app.mysql.delete("bookshelf", {
        username: username,
        title: title,
      })
      this.ctx.body = {
        isSuccess: false,
        message: "取消收藏成功",
      }
    } else {
      const result = await this.app.mysql.insert("bookshelf", {
        username: username,
        title: title,
        price: price,
        picture: picture,
      })
      const insertSuccess = result.affectedRows === 1
      this.ctx.body = {
        isSuccess: insertSuccess,
        message: "收藏成功",
      }
    }
  }
  async judgecollect() {
    const data = this.ctx.request.body
    const { username, title } = data
    let sql =
      " SELECT username FROM bookshelf WHERE username = '" +
      username +
      "'and title = '" +
      title +
      "'"
    const res = await this.app.mysql.query(sql)

    if (res.length != 0) {
      this.ctx.body = {
        isCollect: true,
      }
    } else {
      this.ctx.body = {
        isCollect: false,
      }
    }
  }
}
module.exports = collect
