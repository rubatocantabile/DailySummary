import React, { Component } from 'react'
import axios from 'axios';
import { Layout, Form, Icon, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

const config = require('../../config');

class NormalLoginForm extends Component {

  login = (email, password) => {
    axios.put(config.serverUrl + '/api/auth/user', {
      email: this.state.email,
      password: this.state.password,
    }).then(res => {
      localStorage.setItem(res.body.token);
      this.props.setIsLogined(true)
    }).catch((error) => {
      console.error(error)
    })
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { mail, password } = values
        this.login(mail, password)
      }
    });
  };

  render() {
  const { getFieldDecorator } = this.props.form
    return (
      <>
      <Layout className="one-login flex flex-center">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item className="one-input one-input-email">
              {getFieldDecorator('mail', {
                rules: [{ required: true, message: '이메일 주소를 입력해주세요!' }],
              })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="이메일" />,
              )}
            </Form.Item>
            <Form.Item className="one-input one-input-pw">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '비밀번호를 입력해주세요.!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="비밀번호" />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                로그인
              </Button>
              <div className="shortcut flex">
                <Link to="/signup">회원가입</Link>
                <Link to="">비밀번호 찾기</Link>
              </div>
            </Form.Item>
          </Form>
        </Layout>      
      </>  
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalLoginForm