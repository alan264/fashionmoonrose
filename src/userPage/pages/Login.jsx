// import React from "react";
// import { Button, Checkbox, Form, Input, Col, Row} from "antd";
// import { LoginLeft, LoginRight,FormLogin } from "../styles/loginStyle";
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import Link from "antd/es/typography/Link";
// import Btn from '../components/Btn'

// const onFinish = (values) => {
//   console.log('Received values of form: ', values);
// };
// const Login = () => {
//   return (
//     <Row>
//       <Col span={10}>
//         <LoginLeft></LoginLeft>
//       </Col>
//       <Col span={14}>
//         <LoginRight>
//           <h1>Đăng nhập</h1>
//           <FormLogin
//       name="normal_login"
//       className="login-form"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[{ required: true, message: 'Vui lòng nhập email hoặc số điện thoại của bạn!' }]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email hoặc số điện thoại" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Mật khẩu"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Ghi nhớ tài khoản</Checkbox>
//         </Form.Item>

//         <a className="login-form-forgot" href="">
//           Quên mật khẩu?
//         </a>
//       </Form.Item>

//       <Form.Item>
//         <Btn text="Đăng nhập"></Btn>
//         Bạn chưa có tài khoản? <Link to="Register">Đăng ký ngay!</Link>
//       </Form.Item>
//     </FormLogin>
//         </LoginRight>
//       </Col>
//     </Row>
//   );
// };

// export default Login;
