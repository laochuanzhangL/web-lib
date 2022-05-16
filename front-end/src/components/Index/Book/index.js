import React, { Component, Fragment } from "react"
import "./styles.less"
import star from "../../assets/star.png"
import bluestar from "../../assets/bluestar.png"
import download from "../../assets/download.png"
import { message } from "_antd@4.16.10@antd"
import httpUtil from "../../../utils/httpUtil"
class Book extends Component {
  state = {
    user: "",
    isCollect: false,
  }
  componentDidMount() {
    let user = sessionStorage.getItem('user');
    this.setState(
      {
        user: user,
      },
      () => {
        this.judgeCollect()
      }
    )
  }
  judgeCollect = () => {
    const { user } = this.state
    const { title } = this.props
    const formdata = {
      username: user,
      title: title,
    }
    httpUtil.judgeCollect(formdata).then((res) => {
      if (res.data.isCollect) {
        this.setState({
          isCollect: true,
        })
      }
    })
  }
  buyBook = () => {
    alert("敬请期待")
  }
  collect = () => {
    const { user } = this.state
    if (user) {
      const { title, price, picture } = this.props
      const formdata = {
        username: user,
        title: title,
        price: price,
        picture: picture,
      }
      httpUtil.collect(formdata).then((res) => {
        if (res.data.isSuccess) {
          message.success("收藏成功")
        }
        this.setState({
          isCollect: res.data.isSuccess,
        })
      })
    } else {
      alert("请先登录")
    }
  }
  render() {
    const { isCollect } = this.state
    const { id, title, writer, price, sort, picture } = this.props
    return (
      <Fragment>
        <li className='book' key={id}>
          <div className='inwrap'>
            <div className='bookmes'>
              <div className='picture_wrap'>
                <img src={picture} className='bookcover' />
              </div>
              <div className='textmes'>
                <div className='text'>
                  <div className='message'>
                    <div className='title strong'>
                      <b>书名:</b>
                    </div>
                    <div className='ctitle shallow'>
                      <span>{`《${title}》`}</span>
                    </div>
                  </div>
                  <div className='message'>
                    <div className='write strong'>
                      <b>作者:</b>
                    </div>
                    <div className='cwrite shallow'>
                      <span>{writer}</span>
                    </div>
                  </div>
                  <div className='message'>
                    <div className='sort strong'>
                      <b>类别:</b>
                    </div>
                    <div className='csort shallow'>
                      <span>{sort}</span>
                    </div>
                  </div>
                  <div className='message'>
                    <div className='publisher strong'>
                      <b>价格:</b>
                    </div>
                    <div className='cpublisher shallow'>
                      <span>{price}元</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bookaction'>
              <div className='bookachild'>
                <div className='collect bookadiv'>
                  <div className='nocollect' onClick={this.collect}>
                    {!isCollect ? (
                      <img src={star} className='bookactimg' />
                    ) : (
                      <img src={bluestar} className='bookactimg' />
                    )}
                    <span className='bookafont'>收藏</span>
                  </div>
                </div>
                <div className='download bookadiv' onClick={this.buyBook}>
                  <img src={download} className='bookactimg' />
                  <span className='bookafont'>购买</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    )
  }
}
export default Book
