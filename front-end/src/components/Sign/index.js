import React, { Component, Fragment } from "react"
import "./style.less"
import { Redirect, Route, Switch } from "react-router-dom"
import SignHeader from "./SignHeader/index"
import Login from "./Login/index"
import Register from "./Register/index"
class Sign extends Component {
  render() {
    return (
      <Fragment>
        <SignHeader />
        <Switch>
          <Route path='/sign/login' component={Login} />
          <Route path='/sign/register' component={Register} />
          <Redirect to='/sign/login' />
        </Switch>
      </Fragment>
    )
  }
}
export default Sign
