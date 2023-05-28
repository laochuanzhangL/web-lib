const Controller = require('egg').Controller;

const pump = require('mz-modules/pump');
const fs = require('fs');
// const mv = require("mv")

class goods extends Controller {
  async delete() {
    const id = this.ctx.request.body.id;
    const result = await this.app.mysql.delete('books', {
      id,
    });
    this.ctx.body = {
      isDelete: true,
      message: '删除成功',
    };
  }
  async setnew() {
    /*  const query = this.ctx.request.body;
    const file = this.ctx.request.files;
    const { title, price, writer, popular, sort } = query;
    const filename = file[0].filename;
    const sourceFile = file[0].filepath;
    const destpath = `D:\\学校作业\\Web开发作业\\大作业\\server\\app\\public\\books\\${filename}`;
    mv(sourceFile, destpath, function (err) {
      console.log(err);
    });
    const picture = `http://127.0.0.1:7001/public/books/${filename}`;
    const formdata = {
      title: title,
      price: price,
      writer: writer,
      picture: picture,
      sort: sort,
      popular: popular == true ? 1 : 0,
    };
    let sql = " SELECT title FROM books WHERE title = '" + title + "'";
    const res = await this.app.mysql.query(sql);
    if (res.length != 0) {
      this.ctx.body = {
        message: "该书已存在",
      };
    } else {
      const result = await this.app.mysql.insert("books", formdata);
      const insertSuccess = result.affectedRows === 1;
      this.ctx.body = {
        isSuccess: insertSuccess,
        message: "书籍添加成功",
      };
    } */
    this.ctx.body = {
      isSuccess: insertSuccess,
      message: '书籍添加成功',
    };
  }
}
module.exports = goods;
