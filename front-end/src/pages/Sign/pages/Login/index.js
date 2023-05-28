import React, { Component } from "react"
import "./style.less"
import { Link } from "react-router-dom"
import { Form, Input, Button, Radio, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import httpUtil from "../../../../utils/httpUtil"
class Login extends Component {
  state = {
    role: 1,
  }
  onFinish = (e) => {
    if (this.state.role == 1) {
      httpUtil.userLogin(JSON.parse(JSON.stringify(e))).then((res) => {
        console.log(res)
        if (res.data.status == 1) {
          sessionStorage.setItem("token", res.data.token)
          sessionStorage.setItem("user", e.username)
          sessionStorage.setItem("userId", res.data.userId)
          message.success(res.data.message)
          this.props.history.push("/textmar")
        } else {
          message.error(res.data.message)
        }
      })
    } else {
      httpUtil.managerLogin(JSON.parse(JSON.stringify(e))).then((res) => {
        if (res.data.status == 1) {
          sessionStorage.setItem("user", e.username)
          alert(res.data.message)
          this.props.history.push("/manager")
        } else {
          alert(res.data.message)
        }
      })
    }
  }
  changeRole = (e) => {
    const value = e.target.value
    this.setState({
      role: value,
    })
  }
  render() {
    const { role } = this.state
    return (
      <div className='login_wrap'>
        <div className='login_top'>登录</div>
        <div className='login_container'>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name='username'
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='用户名'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='密码'
              />
            </Form.Item>
            <Form.Item label='登录身份选择' valuePropName='checked'>
              <Radio.Group
                name='type'
                defaultValue={1}
                onChange={this.changeRole}
                value={role}
              >
                <Radio value={1}>学生</Radio>
                <Radio value={2}>管理员</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                提交
              </Button>
              <br />
              <Link to='/sign/register'>前往注册!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
