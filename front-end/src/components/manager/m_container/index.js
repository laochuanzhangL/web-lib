import React, { Component } from "react"
import M_topnva from "./m_topnva"
import M_content from "./m_content"
export default class M_container extends Component {
  render() {
    return (
      <div>
        <M_topnva />
        <M_content />
      </div>
    )
  }
}
