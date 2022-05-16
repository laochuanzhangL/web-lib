import React, { Component, Fragment } from "react"
import "./styles.less"
import Book from "../Book/index"
import PubSub from "pubsub-js"
import { withRouter } from "react-router-dom"
import httpUtil from "../../../utils/httpUtil"
class Results extends Component {
  state = {
    keyword: "",
    book: [],
  }
  componentDidMount() {
    this.token = PubSub.subscribe("haveClick", (_, stateObj) => {
      this.setState(
        {
          keyword: stateObj.keyword,
        },
        () => {
          this.loadBook()
        }
      )
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  loadBook = () => {
    const { keyword } = this.state
    const data = {
      keyword: keyword,
    }
    httpUtil.searchBook(data).then((res) => {
      this.setState(
        {
          book: res.data,
        },
        () => {
          if (this.state.book.length == 0) {
            alert("暂无此书")
            this.props.history.push("/")
          }
        }
      )
    })
  }
  render() {
    return (
      <div className='result'>
        <div className='R_wrap'>
          <div className='yearnav'>
            <div>搜索结果</div>
          </div>
          <div className='book-wrap'>
            {this.state.book.map((book) => {
              return <Book {...book} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Results)
