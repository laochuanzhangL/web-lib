import React, { Component, Fragment } from "react"
import logo from "../../../../assets/logo.png"
import header_1 from "../../../../assets/header_1.png"
import header_2 from "../../../../assets/header_2.png"
import header_3 from "../../../../assets/header_3.png"
import "./style.css"
import { Link } from "react-router-dom"
import PubSub from "pubsub-js"

class Inheader extends Component {
  state = {
    user: "",
  }
  haveClick = () => {
    PubSub.publish("haveClick", { isOnindex: true })
  }
  componentDidMount() {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.setState({
        user: user,
      })
    }
  }
  loginout = () => {
    sessionStorage.removeItem('user');
    PubSub.publish("haveClick", { isOnindex: true })
    const result = window.confirm("是否退出登录？")
    if (result) {
      window.location.href = "/"
      this.setState({
        user: "",
      })
    }
  }
  render() {
    let { user } = this.state
    return (
      <Fragment>
        <div className='header'>
          <div className='header_children'>
            <Link to='/textmar' onClick={this.haveClick}>
              <div className='left'>
                <div className='left_top'>
                  <img src={logo} className='left_top_logo' />
                  <span className='left_top_word'> 邮读书馆</span>
                </div>
                <div className='left_bottom'>
                  <span className='left_bottom_word'>——做最懂你的书馆</span>
                </div>
              </div>
            </Link>
            <div className='right'>
              <Link to='/sign/register'>
                <div className='right_box'>
                  <img src={header_1} className='header_icon' />
                  <div className='right_header_word'>
                    <span>注册</span>
                  </div>
                </div>
              </Link>
              <div className='right_box'>
                {user == "" ? (
                  <Link to='/sign'>
                    <img src={header_2} className='header_icon' />
                    <div className='right_header_word'>
                      <span>未登录</span>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <img
                      src={header_3}
                      className='header_icon_3'
                      onClick={this.loginout}
                      title='点击退出'
                    />
                    <div className='right_header_word'>
                      <span>{user}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Inheader
