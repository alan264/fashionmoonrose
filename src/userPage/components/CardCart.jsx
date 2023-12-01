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
import {
  PUSH_TO_ORDER,
  REMOVE_ORDER,
  UPDATECART,
} from "../contants/productsContants";
import { Checkbox } from "antd";

const CardCart = ({ product }) => {
  const { state, dispatch } = React.useContext(UserContext);

  const removeCart = (product) => {
    const new_cart = [];
    state.cart.map((e) => {
      if (e.id != product.id) {
        new_cart.push(e);
      }
    });
    state.cart = new_cart;
    dispatch({ type: UPDATECART, payload: new_cart });
    localStorage.setItem("state", JSON.stringify(state));
  };
  const handleDecrement = (product) => {
    state.cart.map((e) => {
      if (e.id === product) {
        e.qty = e.qty - 1;
      }
      return e;
    });
    dispatch({ type: UPDATECART, payload: state.cart });
    localStorage.setItem("state", JSON.stringify(state));
  };

  const handleIncrement = (product) => {
    state.cart.map((e) => {
      if (e.id === product) {
        e.qty = e.qty + 1;
      }
      return e;
    });
    dispatch({ type: UPDATECART, payload: state.cart });
    localStorage.setItem("state", JSON.stringify(state));
  };

  const onChange = (e) => {
    if (e.target.checked) {
      dispatch({ type: PUSH_TO_ORDER, payload: product });
    } else {
      dispatch({ type: REMOVE_ORDER, payload: product?.id });
    }
  };
  return (
    <div>
      <div
        // key={product}
        className="row mb-4 d-flex justify-content-between align-items-center"
      >
        <div className="col-md-1 col-lg-1 col-xl-1 d-flex">
          <Checkbox onChange={onChange} />
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 checkcart">
          <img
            src={product.thumbnail}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">{product.name}</h6>
          <h6 className="text-black mb-0">{product.color}</h6>
        </div>

        <div className="col-md-3 col-lg-3 col-xl-1 d-flex">
          <Button shape="circle" onClick={() => handleDecrement(product.id)}>
            -
          </Button>
          <span className="quanty"> {product.qty} </span>

          <Button shape="circle" onClick={() => handleIncrement(product.id)}>
            +
          </Button>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">
            {(product.finalprice * product.qty).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          {/* <button type="button" className="btn btn-danger">X</button> */}
          <Space>
            <Button
              type="text"
              onClick={() => {
                removeCart(product);
              }}
            >
              x
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
