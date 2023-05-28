import React, { Component, Fragment } from "react"
import "./styles.less"
import Book from "../../commponents/Book"
import { Menu } from "antd"
import httpUtil from "../../../../utils/httpUtil"
class Library extends Component {
  state = {
    book: [],
    current: "全部书籍",
  }
  handleClick = (e) => {
    this.setState(
      {
        current: e.key,
      },
      () => this.loadBook()
    )
  }
  componentDidMount() {
    this.loadBook()
  }
  loadBook() {
    const { current } = this.state
    httpUtil.getAllBooks().then((res) => {
      const temp = []
      if (current == "全部书籍") {
        this.setState({
          book: [...res.data],
        })
      } else {
        res.data.forEach((data) => {
          if (data.sort == current) {
            temp.push(data)
          }
        })
        this.setState({
          book: temp,
        })
      }
    })
  }
  render() {
    const { current } = this.state
    return (
      <Fragment>
        <div className='libwrap'>
          <div className='L_wrap'>
            <div className='menu_wrap'>
              <Menu
                onClick={this.handleClick}
                style={{ width: 350 }}
                defaultSelectedKeys={["全部书籍"]}
                mode='inline'
              >
                <Menu.Item key='全部书籍'>全部书籍</Menu.Item>
                <Menu.Item key='社科类'>社科类</Menu.Item>
                <Menu.Item key='文化类'>文化类</Menu.Item>
                <Menu.Item key='文艺类'>文艺类</Menu.Item>
                <Menu.Item key='经管类'>经管类</Menu.Item>
                <Menu.Item key='科技类'>科技类</Menu.Item>
                <Menu.Item key='教育类'>教育类</Menu.Item>
                <Menu.Item key='少儿类'>少儿类</Menu.Item>
              </Menu>
            </div>
          </div>
          <div className='R_wrap'>
            <div className='yearnav'>
              <div>{current}</div>
            </div>
            <div className='book-wrap'>
              {this.state.book.map((book) => {
                return <Book {...book} />
              })}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Library
