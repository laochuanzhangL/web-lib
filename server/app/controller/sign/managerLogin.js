const Controller = require("egg").Controller

class managerLoginController extends Controller {
  async index() {
    let query = this.ctx.request.body
    const username = query.username

    const res = await this.app.mysql.select("managers", {
      where: {
        username: username,
      },
    })
    console.log(res)
    if (res.length > 0) {
      this.ctx.body = {
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
module.exports = managerLoginController
