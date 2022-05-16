/* eslint valid-jsdoc: "off" */

"use strict"

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1637160621371_5540"

  // add your middleware config here
  //config.middleware = ["tokenHandle"]

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ["*"],
  }
  config.cors = {
    origin: "*",
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    withCredentials: true,
  }
  config.view = {
    defaultViewEngine: "nunjucks",
  }
  config.jwt = {
    secret: "021023",

    match: [/^\/shelf/],
  }
  config.mysql = {
    // database configuration
    client: {
      // host
      host: "124.222.80.162",
      // port
      port: "3306",
      // username
      user: "web-lib",
      // password
      password: "021023",
      // database
      database: "web-lib",
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: true,
  }
  config.multipart = {
    mode: "file",
  }
  return {
    ...config,
    ...userConfig,
  }
}
