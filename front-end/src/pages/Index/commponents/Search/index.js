import React, { Component } from "react"
import "./styles.less"
import { Link } from "react-router-dom"
import search from "../../../../assets/search.png"
import PubSub from "pubsub-js"
class Search extends Component {
  state = {
    inputValue: "",
  }
  haveClick = () => {
    PubSub.publish("haveClick", {
      isOnindex: false,
      keyword: this.state.inputValue,
    })
  }
  haveChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  render() {
    return (
      <div className='input-group-wrapper'>
        <div className='input-wrapper'>
          <input
            className='input'
            type='text'
            onChange={this.haveChange}
            placeholder='请输入书名/作者名'
            value={this.state.inputValue}
          />
          <Link to={`/results?keyword=${this.state.inputValue}`}>
            <div className='input-group-addon' onClick={this.haveClick}>
              <div className='btn'>
                <img src={search} className='anticon' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default Search
