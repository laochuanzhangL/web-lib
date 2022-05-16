import React, { Component, Fragment } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Textmar from "./Textmar"
import Inheader from "./Header"
import Topnva from "./Topnva"
import Library from "./Library"
import Shelf from "./Shelf"
import Orders from "./Orders"
import Results from "./Results"
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Inheader />
        <Topnva />
        <Switch>
          <Route path='/shelf' component={Shelf} />
          <Route path='/library' component={Library} />
          <Route path='/results' component={Results} />
          <Route path='/textmar' component={Textmar} />
          <Route path='/orders' component={Orders} />
          <Redirect to='/textmar' />
        </Switch>
      </Fragment>
    )
  }
}
export default Index
