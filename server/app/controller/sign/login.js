const Controller = require("egg").Controller

class loginController extends Controller {
  async index() {
    let query = this.ctx.request.body
    const username = query.username
    const password = query.password
    console.log(query)
    const res = await this.app.mysql.select("users", {
      where: {
        username: username,
      },
    })
    if (res.length > 0) {
      const secret = this.app.config.jwt.secret
      const token = this.ctx.helper.getToken({ username }, secret)

      console.log(token)
      this.ctx.body = {
        token,
        status: 1,
        message: "登录成功",
      }
    } else {
      this.ctx.body = {
        message: "密码错误",
      }
    }
  }
}
module.exports = loginController
