const Controller = require('egg').Controller;

class setorder extends Controller {
  async index() {
    const query = this.ctx.request.body;
    const result = await this.app.mysql.insert('orders', query);
    const insertSuccess = result.affectedRows === 1;
    this.ctx.body = {
      isSuccess: insertSuccess,
      message: '订单确认成功',
    };
  }
}
module.exports = setorder;
