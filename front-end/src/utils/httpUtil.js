/* 
  请求url配置
*/
// 引入请求方法
import { httpReq } from "./httpReq"

class HttpUtil {
  /* 登录注册 */
  // 用户登录
  userLogin = (params) => httpReq("post", "/sign/login", params)
  //管理员登陆
  managerLogin = (params) => httpReq("post", "/sign/manager", params)
  // 注册
  register = (params) => httpReq("post", "/sign/register", params)
  /*书籍操作 */
  //全部书籍
  getAllBooks = () => httpReq("get", "/book/getbook")
  //搜索书籍
  searchBook = (params) => httpReq("post", "/book/getbook/search", params)
  //收藏书籍
  collect = (params) => httpReq("post", "/book/collect", params)
  //判断是否已经收藏
  judgeCollect = (params) => httpReq("post", "/book/collect/judge", params)
  //获取书架书籍
  getShelf = (params) => httpReq("post", "/book/shelf", params)
  //修改书架书籍数量
  amountChange = (params) => httpReq("post", "/book/shelf/amountchange", params)
  //删除书架数量
  deleteShelf = (params) => httpReq("post", "/book/shelf/delete", params)
  //获得已选书籍的价格和数量
  getmessage = (params) => httpReq("post", "/book/shelf/getmessage", params)
  //得到所有用户信息
  getUsers = () => httpReq("get", "/manager/user/getusers")
  //删除某个用户
  deletUser = (params) => httpReq("post", "/manager/user/delete", params)
  //添加用户
  addUser = (params) => httpReq("post", "/manager/user/setnew", params)
  //删除书籍
  deletBook = (params) => httpReq("post", "/manage/goods/delete", params)
  //新增书籍
  addBook = (params) => httpReq("post", "/manage/goods/setnew", params)
  //设置订单
  addOrder = (params) => httpReq("post", "/order/setorder", params)
  //获取指定用户订单
  getOrders = (params) => httpReq("post", "/order/getorders", params)
  //删除某个订单
  deleteOrder = (params) => httpReq("post", "/order/deleteorder", params)
  //获取所有订单
  getAllOrders = () => httpReq("get", "/order/getallorders")
}

export default new HttpUtil()
