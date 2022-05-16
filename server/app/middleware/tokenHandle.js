/* module.exports = (options, app) => {
  return async function tokenHandle(ctx, next) {
    await next()
    const token = ctx.request.header.authorization
    console.log(token)
    if (token) {
      try {
        let decode = ctx.app.jwt.verify(token, app.config.jwt.secret)
        console.log(decode)
        ctx.decode = decode
        await next()
      } catch (e) {
        ctx.helper.error(e, 403)
      }
    } else {
      ctx.helper.error("无权限", 403)
    }
  }
}
 */
