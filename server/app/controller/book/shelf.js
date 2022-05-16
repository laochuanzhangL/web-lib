const Controller = require("egg").Controller

class shelf extends Controller {
  async index() {
    const username = this.ctx.request.body.username
    const res = await this.app.mysql.select("bookshelf", {
      where: {
        username: username,
      },
    })
    this.ctx.body = res
  }
  async amountChange() {
    const query = this.ctx.request.body
    const { amount, title, username } = query
    if (amount >= 1) {
      const result = await this.app.mysql.update(
        "bookshelf",
        {
          amount: amount,
        },
        {
          where: {
            title: title,
            username: username,
          },
        }
      )
      const updateSuccess = result.affectedRows === 1
      this.ctx.body = {
        updateSuccess: updateSuccess,
      }
    } else {
      const result = await this.app.mysql.delete("bookshelf", {
        title: title,
        username: username,
      })
      this.ctx.body = {
        isDelete: true,
      }
    }
  }
  async getmessage() {
    const keys = this.ctx.request.body.key
    var money = 0
    var count = 0
    if (Array.isArray(keys)) {
      for (let key of keys) {
        const res = await this.app.mysql.select("bookshelf", {
          where: {
            key: key,
          },
        })
        if (res.length > 0) {
          const { price, amount } = res[0]
          const temp = price * amount
          money = money + temp
          count = count + amount
        }
      }
    } else {
      const res = await this.app.mysql.select("bookshelf", {
        where: {
          key: keys,
        },
      })
      const { price, amount } = res[0]
      const temp = price * amount
      money = money + temp
      count = count + amount
    }
    this.ctx.body = {
      money: money,
      count: count,
    }
  }
}
module.exports = shelf
