import React, { Component, Fragment } from "react"
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom"
import Index from "./components/Index"
import Sign from "./components/Sign"
import Manager from './components/manager'
import "antd/dist/antd.css"
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path='/sign' component={Sign} />
            <Route path='/manager' component={Manager} />
            <Route path='/' component={Index} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}
