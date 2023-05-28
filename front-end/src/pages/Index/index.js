import React, { Component, Fragment } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import './styles.less'
import Textmar from "./pages/Textmar"
import Inheader from "./commponents/Header"
import Topnva from "./commponents/Topnva"
import Library from "./pages/Library"
import Shelf from "./pages/Shelf"
import Orders from "./pages/Orders"
import Results from "./pages/Results"
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Inheader />
        <Topnva />
        <div className='content_wrap'>
          <Switch>
            <Route path='/shelf' component={Shelf} />
            <Route path='/library' component={Library} />
            <Route path='/results' component={Results} />
            <Route path='/textmar' component={Textmar} />
            <Route path='/orders' component={Orders} />
            <Redirect to='/textmar' />
          </Switch>
        </div>
      </Fragment>
    )
  }
}
export default Index
