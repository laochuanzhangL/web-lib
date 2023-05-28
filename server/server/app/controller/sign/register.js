const Controller = require("egg").Controller
class loginController extends Controller {
  async index() {
    const query = this.ctx.request.body
    const { managercode, username, password } = query
    const data = {
      username,
      password,
    }
    const sql =
      " SELECT username FROM users WHERE username = '" + username + "'"
    const res = await this.app.mysql.query(sql)
    if (res.length != 0) {
      this.ctx.body = {
        message: "已存在该用户，注册失败",
      }
    } else {
      if (managercode) {
        if (managercode == "123456") {
          const managerResult = await this.app.mysql.insert("managers", data)
          const userResult = await this.app.mysql.insert("users", data)
          const insertSuccess =
            userResult.affectedRows === 1 && managerResult.affectedRows === 1
          this.ctx.body = {
            isSuccess: insertSuccess,
            message: "管理员/用户注册成功",
          }
        } else {
          this.ctx.body = {
            isSuccess: false,
            message: "管理员密钥错误",
          }
        }
      } else {
        const userResult = await this.app.mysql.insert("users", data)
        const insertSuccess = userResult.affectedRows === 1
        this.ctx.body = {
          isSuccess: insertSuccess,
          message: "用户注册成功",
        }
      }
    }
  }
}
module.exports = loginController
