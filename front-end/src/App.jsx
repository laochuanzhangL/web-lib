import React, { Component, Fragment } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Index from "./pages/Index"
import Sign from "./pages/Sign"
import Manager from './pages/Manager'
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
