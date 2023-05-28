import React, { Component} from "react"
import "./styles.less"
import { Carousel } from "antd"
import Book from "../../commponents/Book"
import httpUtil from "../../../../utils/httpUtil"
class Textmar extends Component {
  state = {
    popBook: [],
    showBook: [],
  }
  componentDidMount() {
    this.loadBook()
  }
  loadBook() {
    httpUtil.getAllBooks().then((res) => {
      const temp1 = []
      const temp2 = []
      res.data.forEach((data) => {
        if (data.popular != 0) {
          temp1.push(data)
        }
      })
      res.data.forEach((data) => {
        if (data.popular != 0) {
          temp2.push(data.picture)
        }
      })
      this.setState({
        popBook: temp1,
        showBook: temp2,
      })
    })
  }
  render() {
    const { popBook, showBook } = this.state
    return (
      <div className='pop_wrap'>
        <div className='hotThing_wrap'>
          <Carousel autoplay>
            {showBook.map((showBook) => {
              return (
                <div className='img_wrap'>
                  <img src={showBook} />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className='R_wrap'>
          <div className='yearnav'>
            <div >热门推荐</div>
            <div></div>
          </div>
          <div className='book-wrap'>
            {popBook.map((popBook) => {
              return <Book {...popBook} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default Textmar
