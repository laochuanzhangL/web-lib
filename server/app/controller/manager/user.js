const Controller = require("egg").Controller

class user extends Controller {
  async index() {
    const res = await this.app.mysql.select("users")
    this.ctx.body = res
  }
  async delete() {
    const { userId } = this.ctx.request.body
    const result = await this.app.mysql.delete("users", {
      userId: userId,
    })
    this.ctx.body = {
      isDelete: true,
      message: "删除成功",
    }
  }
  async setnew() {
    const query = this.ctx.request.body
    const { username } = query
    let sql = " SELECT username FROM users WHERE username = '" + username + "'"
    const res = await this.app.mysql.query(sql)
    if (res.length != 0) {
      this.ctx.body = {
        message: "已存在该用户，添加失败",
      }
    } else {
      const result = await this.app.mysql.insert("users", query)
      const insertSuccess = result.affectedRows === 1
      this.ctx.body = {
        isSuccess: insertSuccess,
        message: "添加成功",
      }
    }
  }
}
module.exports = user
