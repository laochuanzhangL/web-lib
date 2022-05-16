const jwt = require("jsonwebtoken")
module.exports = {
  //生成Token
  getToken(payload = {}, secret) {
    return jwt.sign(payload, secret, { expiresIn: "1h" })
  },
  //处理错误
  error(error, status) {
    this.ctx.status = status || 403
    this.ctx.body = {
      success: false,
      data: JSON.stringify(error),
    }
  },
}
