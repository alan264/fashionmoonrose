import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Space } from "antd";
import DeleteOutlined from "@ant-design/icons";
import {
  RightStyle,
  LeftStyle,
  ContentStyle,
  SelectStyle,
} from "../styles/cartStyle";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { UPDATECART } from "../contants/productsContants";
import { Checkbox } from "antd";
import CardCart from "../components/CardCart";
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const Cart = (props) => {
  const { state, dispatch } = React.useContext(UserContext);
  const [cart, setCart] = useState([]);

  var priceTransport = 20000;

  const finalPrice = () => {
    return state?.order.reduce((total, item) => {
      return total + item.finalprice * item.qty;
    }, 0);
  };

  useEffect(() => {
    setCart(state.cart);
  }, [state.cart]);

  return (
    <section style={{paddingTop:"100px"}}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="h-100 h-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <ContentStyle className="card card-registration card-registration-2 content">
                    <div className="card-body p-0 ">
                      <div className="row g-0 ">
                        <div className="col-lg-8 left">
                          <LeftStyle>
                            <div className="p-5">
                              <div className="d-flex justify-content-between align-items-center mb-5">
                                <h1 className="fw-bold mb-0 text-black">
                                  Giỏ hàng
                                </h1>
                                <h6 className="mb-0 text-muted">
                                  {state.cart.length} sản phẩm
                                </h6>
                              </div>
                              <hr className="my-4" />

                              {state.cart.map((v, k) => {
                                return <CardCart product={v} />;
                              })}
                              <hr className="my-4" />

                              <div className="pt-5">
                                <h6 className="mb-0">
                                  <Link to={"/"} className="text-body">
                                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                                    Trở về trang chủ
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </LeftStyle>
                        </div>

                        <div className="col-lg-4 right">
                          <RightStyle>
                            <div className="p-5">
                              <h3 className="fw-bold mb-5 mt-2 pt-1">
                                Đặt hàng
                              </h3>
                              <hr className="my-4" />

                              <div className="d-flex justify-content-between mb-4">
                                <h5 className="">Tổng tiền</h5>
                                <h5>
                                  {finalPrice().toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </h5>
                              </div>
                              <hr className="my-4" />
                              <div className="row">
                                <div className="col-6">
                                  <h5 className=" mb-3">Tiền vận chuyển:</h5>
                                </div>
                                <div className="col-6">
                                  <h5 className=" mb-3 tvc">20.000đ</h5>
                                </div>
                              </div>

                              {/* <div className="mb-4 pb-2">
                                <h5 className=" mb-3">
                                  Áp mã giảm giá vận chuyển
                                </h5>

                                <select className="form-select form-select-lg mb-3">
                                  <option selected>Mã giảm 15k</option>
                                </select>
                              </div> */}

                              <div className="mb-5">
                                <div className="form-outline">
                                  {/* <select className="form-select form-select-lg mb-3">
                                    <option selected>Mã giảm giá 20k</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select> */}
                                  {/* <input type="text" id="form3Examplea2" className="form-control form-control-lg" /> */}
                                  {/* <label className="form-label" for="form3Examplea2">Enter your code</label> */}
                                </div>
                              </div>

                              <hr className="my-4" />

                              <div className="d-flex justify-content-between mb-5">
                                <h5 className="text-uppercase">
                                  Tổng thanh toán
                                </h5>
                                <h5>
                                  {(
                                    finalPrice() + priceTransport
                                  ).toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </h5>
                              </div>
                              <Link to={"/payment"}>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-block btn-lg"
                                  data-mdb-ripple-color="dark"
                                >
                                  Đặt hàng
                                </button>
                              </Link>
                            </div>
                          </RightStyle>
                        </div>
                      </div>
                    </div>
                  </ContentStyle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
