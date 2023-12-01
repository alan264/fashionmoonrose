import React from "react";
import { FooterItem, FooterLayout } from "../styles/footerStyle";
import { Col, Row } from "antd";
import logoRemoveBg from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterLayout>
       <Col span={6}> <img src={logoRemoveBg} /></Col>
      <Row>
        <FooterItem span={6}>
        <h5 style={{fontWeight:"bold"}}>Thông tin</h5>
          <h4>Moon Rose</h4>
          <p>
            CÔNG TY TNHH THỜI TRANG MR <br />
            Tầng 8 - Số 2 Tôn Thất Tùng - Đống Đa - Hà Nội <br />
            19003060
            <br /> support@moonrose.vn <br />
            MST: 012345678
          </p>
        </FooterItem>
        <FooterItem span={6}>
          <h5 style={{fontWeight:"bold"}}>Hỗ trợ khách hàng</h5>
          <Link style={{textDecoration:"none"}} to="/">Hướng dẫn mua hàng</Link>
          <br />
          <Link style={{textDecoration:"none"}} to="/">Đăng ký tài khoản</Link>
          <br />
          <Link style={{textDecoration:"none"}} to="/">Chính sách giao hàng</Link>
          <br />
          <Link style={{textDecoration:"none"}} to="/">Chính sách đổi trả hoàn tiền</Link>
          <br />
          <Link style={{textDecoration:"none"}} to="/">Ưu đãi sinh nhật khách hàng</Link>
          <br />
        </FooterItem>
        <FooterItem span={6}>
          <h5 style={{fontWeight:"bold"}}>Liên hệ</h5>
          <Link style={{textDecoration:"none"}} to="/">Giới thiệu</Link>
          <br />
          <Link style={{textDecoration:"none"}} to="/">Tin tức</Link>
          <br />
          <Link style={{textDecoration:"none"}} to="/">Hệ thống của hàng</Link>
          <br />
          <Link  style={{textDecoration:"none"}} to="/">Trợ giúp</Link>
        </FooterItem>
        <FooterItem span={6}>
          <h5 style={{fontWeight:"bold"}}>Theo dõi</h5>
          <Link to="/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-amazon"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </FooterItem>
      </Row>
    </FooterLayout>
  );
};

export default Footer;
