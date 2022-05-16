import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import M_goods from "./m_goods"
import M_users from "./m_users";
import M_orders from "./m_orders";
export default class M_content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/manager/goods" component={M_goods} />
        <Route path="/manager/users" component={M_users} />
        <Route path="/manager/orders" component={M_orders} />
        <Redirect to="/manager/goods" />
      </Switch>
    );
  }
}
