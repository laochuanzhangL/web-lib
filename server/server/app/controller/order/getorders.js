const Controller = require('egg').Controller;

class getorders extends Controller {
  async index() {
    const username = this.ctx.request.body.username;
    const results = await this.app.mysql.select('orders', {
      username,
    });

    this.ctx.body = {
      message: '订单获取成功',
      orders: results,
    };
  }
  async getallorders() {
    const orders = await this.app.mysql.select('orders');

    this.ctx.body = orders;
  }
}
module.exports = getorders;
