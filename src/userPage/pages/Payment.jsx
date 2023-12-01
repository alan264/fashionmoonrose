import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  RightStyle,
  LeftStyle,
  ContentStyle,
  SelectStyle,
} from "../styles/cartStyle";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Space, Select, Modal } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import db from "../../db";
import { listOrder } from "../services/productAction";
import { NULL_ORDER } from "../contants/productsContants";

const Payment = () => {
  const { state, dispatch } = React.useContext(UserContext);
  // const history = useHistory();
  const navigate = useNavigate();
  const [onPopup, setOnPopup] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  const finalPrice = () => {
    return state?.order.reduce((total, item) => {
      return total + item.finalprice * item.qty;
    }, 0);
  };

  const onPayment = async () => {
    const orderInfo = {
      ...form.getFieldsValue(),
      price: finalPrice(),
      status: "1",
      date: dateTime,
      product: listOrderProducts,
    };
    form.validateFields();
    const conn = db.collection("order");
    const docRef = await conn.add(orderInfo);
    setOrderId(docRef.id); // Get the ID of the newly created document
    dispatch({ type: NULL_ORDER });
    form.resetFields();
    setOnPopup(true);
    this.refresh();
  };

  const listOrderProducts = state.order?.map((item) => {
    return {
      id: item.id,
      qty: item.qty,
    };
  });

  const handleOk = () => {
    navigate("/order");
    setOnPopup(false);
  };
  const handleCancel = () => {
    navigate("/");
    setOnPopup(false);
  };

  return (
    <section style={{ paddingTop: "100px" }}>
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
                        <div className="col-lg-6 left">
                          <LeftStyle>
                            <div className="p-5">
                              <div className="d-flex justify-content-between align-items-center mb-5">
                                <h1 className="fw-bold mb-0 text-black">
                                  Thông tin
                                </h1>
                                {/* <h6 className="mb-0 text-muted">
                                                                    {state.cart.length} sản phẩm
                                                                </h6> */}
                              </div>
                              <hr className="my-4" />
                              <Form
                                form={form}
                                name="basic"
                                labelCol={{
                                  span: 8,
                                }}
                                wrapperCol={{
                                  span: 16,
                                }}
                                style={{
                                  maxWidth: 600,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                              >
                                <Form.Item
                                  label="Họ tên"
                                  name="name"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Vui lòng nhập họ tên của bạn!",
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  label="Email"
                                  name="mail"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Vui lòng nhập email của bạn!",
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  label="Số điện thoại"
                                  name="phone"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Vui lòng nhập số điện thoại của bạn!",
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  label="Địa chỉ"
                                  name="address"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Vui lòng nhập địa chỉ của bạn!",
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  label="Phương thức thanh toán"
                                  name="method-payment"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Vui lòng chọn phương thức thanh toán của bạn!",
                                    },
                                  ]}
                                >
                                  <Select
                                    defaultValue=""
                                    style={{ width: "100%" }}
                                    options={[
                                      {
                                        value: "",
                                        label: "Chọn phương thức thanh toán",
                                      },
                                      {
                                        value: "delivery",
                                        label: "Thanh toán khi nhận hàng",
                                      },
                                      {
                                        value: "online",
                                        label: "Thanh toán Online",
                                      },
                                    ]}
                                  />
                                </Form.Item>
                              </Form>

                              <div className="pt-5">
                                <h6 className="mb-0">
                                  <Link to={"/cart"} className="text-body">
                                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                                    Trở về giỏ hàng
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </LeftStyle>
                        </div>

                        <div className="col-lg-6 right">
                          <RightStyle>
                            <div className="p-5">
                              <h3 className="fw-bold mb-5 mt-2 pt-1">
                                Thanh toán
                              </h3>
                              <hr className="my-4" />
                              {state.order?.map((v, k) => {
                                return (
                                  <div
                                    key={k}
                                    className="row mb-4 d-flex justify-content-between align-items-center"
                                  >
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={v.thumbnail}
                                        className="img-fluid rounded-3"
                                        alt="Cotton T-shirt"
                                      />
                                    </div>
                                    <div className="col-md-4 col-lg-3 col-xl-3">
                                      <h6 className="text-muted">{v.name}</h6>
                                      <h6 className="text-black mb-0">
                                        {v.color}
                                      </h6>
                                    </div>
                                    {/* <div className="col-md-4 col-lg-4 col-xl-2 d-flex">
                                                                                <Button
                                                                                    shape="circle"
                                                                                    
                                                                                >
                                                                                    -
                                                                                </Button>
                                                                                <span className="quanty"> {v.qty} </span>

                                                                                <Button
                                                                                    shape="circle"
                                                                                    
                                                                                >
                                                                                    +
                                                                                </Button>
                                                                            </div> */}
                                    <div className="col-md-5 col-lg-5 col-xl-4 offset-lg-1">
                                      <h6 className="mb-0">
                                        {(v.finalprice * v.qty).toLocaleString(
                                          "vi",
                                          { style: "currency", currency: "VND" }
                                        )}
                                      </h6>
                                    </div>
                                  </div>
                                );
                              })}

                              <hr className="my-4" />

                              <div className="d-flex justify-content-between mb-5">
                                <h5 className="text-uppercase">
                                  Tổng thanh toán
                                </h5>
                                {/* <h5>{(totals + priceTransport).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h5> */}
                                <h5>
                                  {finalPrice().toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </h5>
                              </div>

                              <button
                                type="button"
                                className="btn btn-dark btn-block btn-lg"
                                data-mdb-ripple-color="dark"
                                onClick={() => onPayment()}
                              >
                                Thanh toán
                              </button>
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
      {onPopup && (
        <Modal
          title="Đặt hàng thành công"
          open={onPopup}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Tìm kiếm đơn hàng của bạn"
          cancelText="Trang chủ"
          style={{
            marginTop:"50px",
            fontSize:"20px"
          }}
        >
          <p>
            Mã đơn hàng của bạn là: <b>{orderId}</b>
          </p>
        </Modal>
      )}
    </section>
  );
};
export default Payment;
