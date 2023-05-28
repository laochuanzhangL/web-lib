import React, { Component } from "react"
import { Table, Space, Popconfirm, message } from "antd"
import httpUtil from "../../../../utils/httpUtil";
export default class Orders extends Component {
  state = {
    user: undefined,
    orders: [],
    columns: [
      {
        title: "收件人",
        dataIndex: "name",
        width: 100,
      },
      {
        title: "电话号码",
        dataIndex: "count",
        width: 200,
      },
      {
        title: "期望到货时间",
        dataIndex: "time",
        width: 200,
        render: (record) => record.substr(0, 10),
      },
      {
        title: "地址",
        dataIndex: "address",
        width: 150,
      },
      {
        title: "书本数量",
        dataIndex: "count",
        width: 200,
      },
      {
        title: "总金额",
        dataIndex: "money",
        width: 200,
      },
      {
        title: "操作",
        dataIndex: "action",
        width: 200,
        render: (_, record) => (
          <Space size='middle'>
            <Popconfirm
              title='是否要删除?'
              okText="确定"
              cancelText="取消"
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
    let user = sessionStorage.getItem('user');
    let userId = sessionStorage.getItem('userId');
    this.setState({
      user: user,
    })
    const formdata = {
      userId: userId,
    }
    this.loadOrders(formdata)
  }
  loadOrders = (formdata) => {
    httpUtil.getOrders(formdata).then((res) => {
      this.setState({
        orders: res.data.orders,
      })
    })
  }
  handleDelete = (e) => {
    const { user } = this.state
    const formdata = {
      id: e.Id,
    }
    const formdata2 = {
      username: user,
    }
    httpUtil.deleteOrder(formdata).then((res) => {
      if (res.data.isDelete) {
        message.success("删除成功")
        this.loadOrders(formdata2)
      }
    })
  }
  render() {
    const { columns, orders } = this.state
    return (
      <div className='orders_wrap'>
        <Table columns={columns} dataSource={orders} />
      </div>
    )
  }
}
