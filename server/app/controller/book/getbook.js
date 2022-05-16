const Controller = require("egg").Controller

class getbook extends Controller {
  async index() {
    const res = await this.app.mysql.select("books")
    this.ctx.body = res
  }
  async search() {
    const keyword = this.ctx.request.body.keyword
    let sql = `SELECT * FROM books WHERE title LIKE '%${keyword}%' or writer LIKE '%${keyword}%' or sort LIKE '%${keyword}%'`
    const res = await this.app.mysql.query(sql)
    this.ctx.body = res
  }
}
module.exports = getbook
