"use strict"

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get("/api/", controller.home.index)
  /* 登录注册 */
  //登录
  router.post("/api/sign/login", controller.sign.login.index)
  router.post("/api/sign/manager", controller.sign.managerLogin.index)
  //注册
  router.post("/api/sign/register", controller.sign.register.index)
  /*书籍操作 */
  //全部书籍
  router.get("/api/book/getbook", controller.book.getbook.index)
  //搜索书籍
  router.post("/api/book/getbook/search", controller.book.getbook.search)
  //收藏书籍
  router.post("/api/book/collect", controller.book.collect.index)
  //判断是否已经收藏
  router.post("/api/book/collect/judge", controller.book.collect.judgecollect)
  //获取书架书籍
  router.post("/api/book/shelf", controller.book.shelf.index)
  //修改暑假书籍数量
  router.post("/api/book/shelf/amountchange", controller.book.shelf.amountChange)
  //获得已选书籍的价格和数量
  router.post("/api/book/shelf/getmessage", controller.book.shelf.getmessage)
  //得到所有用户信息
  router.get("/api/manager/user/getusers", controller.manager.user.index)
  //删除某个用户
  router.post("/api/manager/user/delete", controller.manager.user.delete)
  //添加用户
  router.post("/api/manager/user/setnew", controller.manager.user.setnew)
  //删除书籍
  router.post("/api/manage/goods/delete", controller.manager.goods.delete)
  //新增书籍
  router.post("/api/manage/goods/setnew", controller.manager.goods.setnew)
  //设置订单
  router.post("/api/order/setorder", controller.order.setorder.index)
  //获取指定用户订单
  router.post("/api/order/getorders", controller.order.getorders.index)
  //删除某个订单
  router.post("/api/order/deleteorder", controller.order.deleteorder.index)
  //获取所有订单
  router.get("/api/order/getallorders", controller.order.getorders.getallorders)
  //获取所有蔬菜
  router.get("/api/vegetables/get", controller.vegetables.get.index)
}
