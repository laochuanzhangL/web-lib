import React, { Component } from "react";
import M_container from "./m_container";
import M_header from "./m_header";
export default class Manager extends Component {
  render() {
    return (
      <div>
        <M_header />
        <M_container />
      </div>
    );
  }
}
