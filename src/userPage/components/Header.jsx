import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logowebclothing.png";
import {
  HeaderLayout,
  Logo,
  NavHeader,
  DropdownStyle,
} from "../styles/headerStyle";
import { Col, Row, Badge, Input, Dropdown, Button } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import UserContext from "../context/UserContext";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState(""); // State to store the search value
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // When Enter key is pressed
      dispatch({
        type: "VALUESEARCH",
        payload: searchValue,
      });
      navigate("/products");
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const items = [
    {
      key: "1",
      label: (
        <NavLink to={"/account"} style={{ background: "red" }}>
          <h5>Tài khoản của tôi</h5>
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to={"/order"}>
          <h5>Đơn hàng</h5>
        </NavLink>
      ),
    },
    {
      key: "3",
      label: <h5>Đăng xuất</h5>,
    },
  ];

  return (
    <HeaderLayout navbar={navbar}>
      <Row>
        <Logo span={3}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </Logo>

        <Col span={15}>
          <NavHeader>
            <NavLink to={"/"}>TRANG CHỦ</NavLink>
            <NavLink to={"/products"}>SẢN PHẨM</NavLink>
            <NavLink to={"/about"}>THÔNG TIN</NavLink>
            <NavLink to={"/blog"}>BLOG</NavLink>
            <NavLink to={"/contact"}>LIÊN HỆ</NavLink>
          </NavHeader>
        </Col>

        <Col span={6}>
          <SearchOutlined onClick={handleSearch} style={{ fontSize: "25px" }} />
          <NavLink to={"/cart"}>
            <Badge
              count={state.cart.length}
              offset={[10, 10]}
              size="small"
              style={{
                fontSize: "10px",
                backgroundColor: "#DABAAD",
              }}
            >
              <ShoppingCartOutlined style={{ fontSize: "25px" }} />
            </Badge>
          </NavLink>
          <NavLink to="/favourite">
            <Badge
              count={state.favourite?.length}
              offset={[10, 10]}
              size="small"
              style={{
                fontSize: "10px",
                backgroundColor: "#DABAAD",
              }}
            >
              <HeartOutlined style={{ fontSize: "25px" }} />
            </Badge>
          </NavLink>

          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            className="dropd"
          >
          
              <UserOutlined style={{ fontSize: "25px" }} />
      
          </Dropdown>
        </Col>

        {showSearch && (
          <Input
            placeholder="Tìm kiếm sản phẩm"
            prefix={<SearchOutlined />}
            style={{
              borderRadius: "30px",
              padding: "16px",
              zIndex: 1,
            }}
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        )}
      </Row>
    </HeaderLayout>
  );
};

export default Header;
