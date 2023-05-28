import React, { Component, Fragment } from "react"
import Content from "./Content"
import "./styles.less"
class Shelf extends Component {
  state = {
    user: "",
  }
  componentDidMount() {
    let user = sessionStorage.getItem('user');
    this.setState({ user: user }, )
  }
  render() {
    const { user } = this.state
    {
      if (!user) {
        return <div>请先登录</div>
      } else {
        return <Content />
      }
    }
  }
}
export default Shelf
