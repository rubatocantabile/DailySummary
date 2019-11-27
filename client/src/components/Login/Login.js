
import React, { Component } from 'react'
import { Layout, Form, Icon, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
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
              <Link to="/post/write" className="btn-wrap">
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                  로그인
                </Button> 
              </Link>           
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