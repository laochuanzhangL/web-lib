import React, { Component } from "react"
import M_goods from "./pages/M_goods"
import M_users from "./pages/M_users"
import M_header from "./commponents/M_header"
import M_topnva from "./commponents/M_topnva"
import M_orders from "./pages/M_orders"
import { Redirect,Switch,Route } from "react-router"
export default class Manager extends Component {
  render() {
    return (
      <div>
        <M_header />
        <div>
          <M_topnva />
          <Switch>
            <Route path='/manager/goods' component={M_goods} />
            <Route path='/manager/users' component={M_users} />
            <Route path='/manager/orders' component={M_orders} />
            <Redirect to='/manager/goods' />
          </Switch>
        </div>
      </div>
    )
  }
}
