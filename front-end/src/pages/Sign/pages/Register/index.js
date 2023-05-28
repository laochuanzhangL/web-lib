import React, { Component } from "react"
import "./style.less"
import { Link, withRouter } from "react-router-dom"
import { Form, Input, Button, message } from "antd"
import { UserOutlined, LockOutlined, UserAddOutlined } from "@ant-design/icons"
import httpUtil from "../../../../utils/httpUtil"

class Register extends Component {
  onFinish = (e) => {
    httpUtil.register(JSON.parse(JSON.stringify(e))).then((res) => {
      if (res.data.isSuccess) {
        this.props.history.push("./sign")
        message.success(res.data.message)
      } else message.error(res.data.message)
    })
  }
  render() {
    return (
      <div className='register_wrap'>
        <div className='register_top'>注册</div>
        <div className='register_container'>
          <Form
            name='normal_register'
            className='register-form'
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name='username'
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='用户名'
                maxLength='12'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='密码'
                maxLength='16'
              />
            </Form.Item>
            <Form.Item name='managercode' rules={[{ required: false }]}>
              <Input
                prefix={<UserAddOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='管理员密钥，成为管理员的途径'
                maxLength='16'
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='register-form-button'
              >
                提交
              </Button>
              <br />
              <Link to='/sign/login'>前往登录!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(Register)
