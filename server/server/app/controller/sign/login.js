const Controller = require('egg').Controller;

class loginController extends Controller {
  async index() {
    const query = this.ctx.request.body;
    const username = query.username;
    const password = query.password;
    const res = await this.app.mysql.select('users', {
      where: {
        username,
        password,
      },
    });
    if (res.length > 0) {
      const token = this.ctx.helper.getToken({
        username,
        id: res.id,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      });
      console.log(token);
      this.ctx.body = {
        token,
        status: 1,
        message: '登录成功',
      };
    } else {
      this.ctx.body = {
        message: '密码错误',
      };
    }
  }
}
module.exports = loginController;
