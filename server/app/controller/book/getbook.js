const Controller = require("egg").Controller
class getbook extends Controller {
  async index() {
    const res = await this.app.mysql.select("books")
    // console.log(res.slice(1,3))
    const updatedBooks = res.map(book => {
      const updatedPicture = book.picture.replace('http://127.0.0.1', 'http://192.168.43.219');
      return { ...book, picture: updatedPicture };
    });
    this.ctx.body = updatedBooks
  }
  async search() {
    const keyword = this.ctx.request.body.keyword
    const sql = `SELECT * FROM books WHERE title LIKE '%${keyword}%' or writer LIKE '%${keyword}%' or sort LIKE '%${keyword}%'`
    const res = await this.app.mysql.query(sql)
    this.ctx.body = res
  }
}
module.exports = getbook
