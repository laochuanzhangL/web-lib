import React, { Component } from "react"
import { Table, Space, Popconfirm } from "antd"
import httpUtil from "../../../../../utils/httpUtil"
export default class M_orders extends Component {
  state = {
    user: undefined,
    orders: [],
    columns: [
      {
        title: "用户名",
        dataIndex: "username",
        width: 100,
      },
      {
        title: "收件人",
        dataIndex: "name",
        width: 100,
      },
      {
        title: "电话号码",
        dataIndex: "count",
        width: 100,
      },
      {
        title: "期望到货时间",
        dataIndex: "time",
        width: 120,
        render: (record) => record.substr(0, 10),
      },
      {
        title: "地址",
        dataIndex: "address",
        width: 100,
      },
      {
        title: "书本数量",
        dataIndex: "count",
        width: 100,
      },
      {
        title: "总金额",
        dataIndex: "money",
        width: 100,
      },
      {
        title: "操作",
        dataIndex: "action",
        width: 100,
        render: (_, record) => (
          <Space size='middle'>
            <Popconfirm
              title='是否删除?'
              okText='确定'
              cancelText='取消'
              onConfirm={() => this.handleDelete(record)}
            >
              <a>删除</a>
            </Popconfirm>
          </Space>
        ),
      },
    ],
  }
  componentDidMount() {
    this.loadmes()
  }
  loadmes = () => {
    httpUtil.getAllOrders().then((res) => {
      this.setState({
        orders: res.data,
      })
    })
  }
  handleDelete = (e) => {
    const formdata = {
      id: e.Id,
    }
    httpUtil.deleteOrder(formdata).then((res) => {
      if (res.data.isDelete) {
        this.loadmes()
      }
    })
  }
  render() {
    const { columns, orders } = this.state
    return (
      <div>
        <Table columns={columns} dataSource={orders} />
      </div>
    )
  }
}
