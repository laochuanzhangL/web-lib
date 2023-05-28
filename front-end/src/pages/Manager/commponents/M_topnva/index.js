import React, { Component } from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import PubSub from "pubsub-js"
import "./styles.less"
const { SubMenu } = Menu
export default class M_topnva extends Component {
  state = {
    current: "goods",
    user: "",
  }
  componentDidMount() {
    const pathname = window.location.pathname.substr(9)
    let user = sessionStorage.getItem('user');
    this.setState({
      user: user,
      current: pathname,
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }
  render() {
    const { current } = this.state
    return (
      <div className='M_topnva_wrap'>
        <div className='Menu-wrap'>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode='horizontal'
            className='selector-wrap'
          >
            <Menu.Item key='uers' className='selector eles'>
              <Link to='/manager/users'>用户管理</Link>
            </Menu.Item>
            <Menu.Item key='goods' className='selector else'>
              <Link to='/manager/goods'> 商品管理 </Link>
            </Menu.Item>
            <Menu.Item key='orders' className='selector '>
              {}
              <Link to='/manager/orders'> 订单管理</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}
