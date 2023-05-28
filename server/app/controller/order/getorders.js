const Controller = require("egg").Controller

class getorders extends Controller {
  async index() {
    const userId = this.ctx.request.body.userId
    const results = await this.app.mysql.select("orders", {
      where: {
        userId,
      },
    })
    console.log(userId, results)
    this.ctx.body = {
      message: "订单获取成功",
      orders: results,
    }
  }
  async getallorders() {
    const orders = await this.app.mysql.select("orders")

    this.ctx.body = orders
  }
}
module.exports = getorders
