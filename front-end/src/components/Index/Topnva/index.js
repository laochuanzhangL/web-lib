import React, { Component } from "react"
import "./Test.less"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import PubSub from "pubsub-js"
import { withRouter } from "react-router"
class Topnva extends Component {
  state = {
    current: "textmar",
    isOnindex: true,
    user: "",
  }
  componentDidMount() {
    let user = sessionStorage.getItem('user');
    const pathname = this.props.location.pathname.substr(1)
    this.setState({
      user: user,
      current: pathname,
    })
    this.token = PubSub.subscribe("haveClick", (_, stateObj) => {
      this.setState({
        isOnindex: stateObj.isOnindex,
        current: "textmar",
      })
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
      isOnindex: true,
    })
  }

  render() {
    const { current, isOnindex } = this.state
    return (
      <div className='topnva_wrap'>
        <div className={isOnindex ? "Menu-wrap" : "Menu-wrap miss"}>
          <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={[]}
            selectedKeys={[current]}
            mode='horizontal'
            className='selector-wrap'
          >
            <Menu.Item
              key='textmar'
              className={isOnindex ? "selector" : "aftermiss selector"}
            >
              <Link to='/' className={isOnindex ? null : "miss"}>
                热门推荐
              </Link>
            </Menu.Item>
            <Menu.Item key='library' className='selector else'>
              <Link to='/library' className={isOnindex ? null : "miss"}>
                {" "}
                图书馆{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key='shelf' className='selector'>
              {}
              <Link to='/shelf'> 我的书架</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}
export default withRouter(Topnva)
