const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://124.222.80.162:7001",
      changeOrigin: true,
      pathRewrite: { "^/": "" },
    })
  )
}