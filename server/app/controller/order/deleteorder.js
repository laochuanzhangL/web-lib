const Controller = require("egg").Controller;

class deleteorder extends Controller {
  async index() {
    const id = this.ctx.request.body.id;
    const result = await this.app.mysql.delete("orders", {
      id: id,
    });
    this.ctx.body = {
      isDelete: true,
      message: "删除成功",
    };
  }
}
module.exports = deleteorder;
