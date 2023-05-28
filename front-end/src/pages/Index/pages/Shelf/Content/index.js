import React, { Component } from "react"
import {
  Table,
  InputNumber,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  message,
  Space,
  Popconfirm,
} from "antd"
import "./styles.less"
import PubSub from "pubsub-js"
import getnew from "../../../../.././assets/getnew.png"
import myorders from "../../../../.././assets/myorders.png"
import { Link, withRouter } from "react-router-dom"
import httpUtil from "../../../../../utils/httpUtil"
class Content extends Component {
  state = {
    selectedRowKeys: [],
    book: [],
    value: "",
    user: "",
    count: 0,
    money: 0,
    visible: false,
    columns: [
      {
        title: "图片",
        dataIndex: "picture",
        width: 200,
        render: (record) => {
          return (
            <div className='shelf_img_wrap'>
              <img src={record} style={{ height: "100px" }} />
            </div>
          )
        },
      },
      {
        title: "书名",
        dataIndex: "title",
        width: 200,
        render: (record) => {
          return `《${record}》`
        },
      },
      {
        title: "单价",
        dataIndex: "price",
        width: 200,
        render: (record) => {
          return `${record}元`
        },
      },
      {
        title: "数量",
        dataIndex: "amount",
        width: 200,
        render: (amount) => {
          return (
            <InputNumber
              size='large'
              min={1}
              max={100}
              bordered='false'
              defaultValue={amount}
              onChange={this.numberChange}
            />
          )
        },
      },
      {
        title: "操作",
        dataIndex: "delete",
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
    let user = sessionStorage.getItem("user")
    let userId = sessionStorage.getItem("userId")
    this.setState(
      {
        user: user,
        userId: userId,
      },
      () => {
        this.loadBook()
      }
    )
  }
  handleDelete = (e) => {
    const { key, title } = e
    const { user } = this.state
    const formdata = {
      username: user,
      title: title,
      key: key,
    }
    httpUtil.deleteShelf(formdata).then((res) => {
      if (res.data.isDelete) {
        message.success("删除成功")
        this.loadBook()
      }
    })
  }
  numberChange = (value) => {
    const { user } = this.state
    this.token = PubSub.subscribe("amountChange", (_, stateObj) => {
      const formdata = {
        username: user,
        title: stateObj.title,
        amount: value,
        key: stateObj.key,
      }
      if (value > 100) {
        message.warn("数量最高为100")
      } else {
        httpUtil.amountChange(formdata).then((res) => {})
      }
    })
  }

  loadBook = () => {
    const { user, userId } = this.state
    const formdata = {
      username: user,
      userId: userId,
    }
    httpUtil.getShelf(formdata).then((res) => {
      this.setState({
        book: res.data,
      })
    })
  }
  handleAdd = () => {
    const { count } = this.state
    if (count == 0) {
      alert("请选择书籍")
    } else {
      this.setState({
        visible: true,
      })
    }
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  getnew = () => {
    const { selectedRowKeys } = this.state
    const formdata = {
      key: selectedRowKeys,
    }
    if (selectedRowKeys.length > 0) {
      httpUtil.getmessage(formdata).then((res) => {
        this.setState({
          selectedRowKeys: selectedRowKeys,
          count: res.data.count,
          money: res.data.money.toFixed(1),
        })
      })
    } else {
      this.setState({ selectedRowKeys: selectedRowKeys, count: 0, money: 0 })
    }
  }
  onFinish = (formdata) => {
    const { money, user, count } = this.state
    let userId = sessionStorage.getItem("userId")
    const { phonenumber, address, time, name } = formdata
    const righttime = time.format("yyyy-MM-DD")
    const query = {
      name: name,
      money: money,
      username: user,
      count: count,
      phonenumber: phonenumber,
      address: address,
      time: righttime,
      userId: userId,
    }
    httpUtil.addOrder(query).then((res) => {
      if (res.data.isSuccess) {
        message.success(res.data.message)
      }
      this.setState({
        visible: false,
      })
    })
  }

  onSelectChange = (selectedRowKeys) => {
    const formdata = {
      key: selectedRowKeys,
    }
    if (selectedRowKeys.length > 0) {
      httpUtil.getmessage(formdata).then((res) => {
        this.setState({
          selectedRowKeys: selectedRowKeys,
          count: res.data.count,
          money: res.data.money.toFixed(1),
        })
      })
    } else {
      this.setState({ selectedRowKeys: selectedRowKeys, count: 0, money: 0 })
    }
  }
  render() {
    const { selectedRowKeys, book, columns, count, money, visible, user } =
      this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div className='shelf_content'>
        <div className='table_wrap'>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={book}
            rowKey={(record) => record.key}
            pagination='false'
            onRow={(record) => ({
              onClick: (e) => {
                PubSub.publish("amountChange", record)
              },
            })}
          />
          <div className='shelf_temp'></div>
        </div>
        <div className='shelf_modal'>
          <Modal
            title='确认订单'
            visible={visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              onFinish={this.onFinish}
              layout='horizontal'
              size='center'
            >
              <Form.Item>
                <div className='modol_tip'>
                  <div>用户名：{user}</div>
                  <div>书本数量：{count}本</div>
                </div>
              </Form.Item>
              <Form.Item label='收件人' name='name'>
                <Input bordered='false' placeholder='请输入收件人姓名' />
              </Form.Item>
              <Form.Item label='电话号码' name='phonenumber'>
                <Input
                  bordered='false'
                  placeholder='请输入电话号码'
                  minLength='11'
                />
              </Form.Item>
              <Form.Item label='地址' name='address'>
                <Input bordered='false' placeholder='请输入详细地址' />
              </Form.Item>
              <Form.Item label='发货日期' name='time'>
                <DatePicker placeholder='发货日期' />
              </Form.Item>
              <Form.Item label='总金额'>
                <div>{money}元</div>
              </Form.Item>
              <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button type='primary' htmlType='submit' block>
                  确认订单
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className='footer'>
          <div className='left'>
            <Link to='/orders' onClick={this.ordersClick}>
              <img src={myorders} title='查看订单' />
            </Link>
          </div>
          <div className='wrap'>
            <div className='newbutton'>
              <img src={getnew} className='getnew' onClick={this.getnew} />
            </div>
            <div className='message'>
              <div className='count'>
                <div>
                  当前已选中图书<span className='keyword'>{count}</span>本
                </div>
              </div>
              <div className='money'>
                <div>
                  当前总金额<span className='keyword'>{money}</span>元
                </div>
              </div>
            </div>
            <div className='button'>
              <Button type='primary' onClick={this.handleAdd} block>
                购买
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Content)
