module.exports = app => {
  return async function tokenJudge(ctx, next) {
    const token = ctx.request.header.authorization.split(' ')[1];
    if (token !== null) {
      try {
        const decode = await app.jwt.verify(
          token,
          app.config.jwt.secret,
          (err, decoded) => {
            if (err) {
              return 'err';
            }
            return decoded;

          }
        );
        ctx.user = {
          uid: decode.uid,
          name: decode.name,
          status: decode.status,
        };
        if (decode == 'err') {
          ctx.status = 401;
          ctx.body = {
            message: '请先登陆',
            data: null,
          };
        } else {
          await next();
        }
      } catch (e) {
        app.logger.debug(e);
        ctx.status = 401;
        ctx.body = {
          message: '请先登陆',
          data: null,
        };
      }
    } else {
      app.logger;
      ctx.status = 401;
      ctx.body = {
        message: '请先登陆',
        data: null,
      };
    }
  };
};
