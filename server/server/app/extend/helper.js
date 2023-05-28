const jwt = require('jsonwebtoken');
module.exports = {
  // 生成Token
  getToken(payload) {
    return jwt.sign(payload, this.app.config.jwt.secret);
  },
  // 处理错误
  error(error, status) {
    this.ctx.status = status || 401;
    this.ctx.body = {
      status: 401,
      success: false,
      data: JSON.stringify(error),
    };
  },
};
