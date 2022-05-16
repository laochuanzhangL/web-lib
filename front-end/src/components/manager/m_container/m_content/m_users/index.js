import React, { Component } from "react"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import {
  Table,
  Space,
  Popconfirm,
  Button,
  Modal,
  Form,
  Input,
  message,
} from "antd"
import "./styles.less"
import httpUtil from "../../../../../utils/httpUtil"
const { Column } = Table
export default class M_users extends Component {
  state = {
    data: [],
    visible: false,
  }
  componentDidMount() {
    this.loadmes()
  }
  loadmes = () => {
    httpUtil.getUsers().then((res) => {
      this.setState({
        data: res.data,
      })
    })
  }
  handleAdd = () => {
    this.setState({
      visible: true,
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  handleDelete = (e) => {
    const { userId } = e
    const formdata = {
      userId: userId,
    }
    httpUtil.deletUser(formdata).then((res) => {
      if (res.data.isDelete) {
        message.success(res.data.message)
        this.loadmes()
      }
    })
  }
  onFinish = (formdata) => {
    httpUtil.addUser(formdata).then((res) => {
      message.info(res.data.message)
      if (res.data.isSuccess) {
        this.setState(
          {
            visible: false,
          },
          () => {
            this.loadmes()
          }
        )
      }
    })
  }

  render() {
    const { data, visible } = this.state
    return (
      <div className='user_table'>
        <Table
          dataSource={data}
          footer={() => (
            <Button
              type='dashed'
              style={{ width: "100%", height: 50 }}
              onClick={this.handleAdd}
            >
              + 新增
            </Button>
          )}
        >
          <Column title='用户名' dataIndex='username' key='username' />
          <Column title='密码' dataIndex='password' key='password' />
          <Column
            title='操作'
            key='action'
            render={(_, record) => (
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
            )}
          />
        </Table>
        <Modal
          title='添加用户'
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form className='user_form' preserve={false} onFinish={this.onFinish}>
            <Form.Item
              name='username'
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
