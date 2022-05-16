const Controller = require("egg").Controller

class get extends Controller {
  async index() {
    const res = await this.app.mysql.select("vegetables")

    this.ctx.body = res
  }
}
module.exports = get
