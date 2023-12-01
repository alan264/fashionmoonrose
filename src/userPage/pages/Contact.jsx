import React from 'react';
import { ContactBottom, ContactInfo, ContactLayout, ContactTop , FormContact} from '../styles/contactStyle';
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import Btn from '../components/Btn';
import { PhoneOutlined ,MailOutlined,EnvironmentOutlined} from '@ant-design/icons';

const Contact = () => {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
  };
    return (
        <ContactLayout>
          <ContactTop>
            <h3>Liên hệ với chúng tôi</h3>
            <p>Hãy cho chúng tôi biết mọi cảm nhận và góp ý của bạn về sản phẩm </p>
          </ContactTop>
          <ContactBottom>
<Row>
<Col span={12}>
<FormContact
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <h3
    style={{
      textAlign:"center",
      fontWeight:"bold",
      marginBottom:"30px"
    }}
    >Gửi lời nhắn</h3>
    <Form.Item
      name={['user', 'name']}
      label="Họ và Tên"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'phone']}
      label="Số điện thoại"
      rules={[
        {
          type: 'number',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'message']} label="Lời nhắn">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Btn text='Gửi' type="primary" htmlType="submit">
        
      </Btn>
    </Form.Item>
  </FormContact>
</Col>
<Col span={12}>
<ContactInfo>
    <h3>Thông tin liên hệ</h3>
    <p>
    <PhoneOutlined />
    <span>   012345678</span>
    </p>
    <p>
    <MailOutlined />
    <span>   moonRoseFashion@gmail.com</span>
    </p>
    <p>
    <EnvironmentOutlined />
    <span>   Tầng 8 - Số 2 Tôn Thất Tùng - Đống Đa - Hà Nội</span>
    </p>
  </ContactInfo>
  </Col>
</Row>
          </ContactBottom>
        </ContactLayout>
    );
};

export default Contact;