import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { message } from "antd"
message.config({
  duration: 2, // 持续时间
  maxCount: 3, // 最大显示数, 超过限制时，最早的消息会被自动关闭
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
)
