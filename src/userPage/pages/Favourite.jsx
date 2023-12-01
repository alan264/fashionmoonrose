import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Space } from "antd";
import { PlusOutlined, HeartOutlined } from '@ant-design/icons';
import DeleteOutlined from "@ant-design/icons";
import {
    RightStyle,
    LeftStyle,
    ContentStyle,
    SelectStyle,
} from "../styles/cartStyle";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { UPDATECART,ADDCART } from "../contants/productsContants";

const Favourite = ({ product }) => {
    const { state, dispatch } = React.useContext(UserContext);
    const [favourite, setFavourite] = useState([]);

    const removefavourite = (product) => {
        const new_favourite = [];
        state.favourite.map((e) => {
            if (e.id != product.id) {
                new_favourite.push(e);
            }
        });
        state.favourite = new_favourite;
        dispatch({ type: UPDATECART, payload: new_favourite });
        localStorage.setItem("state", JSON.stringify(state));
    };
    const addToCart = (product) => {
        let check = false;
        state.cart?.map((e) => {
            if (e?.id === product?.id) {
                e.qty = e.qty + 1;
                check = true;
            }
            return e;
        });
        if (check == false) {
            product.qty = 1;
            state.cart?.push(product);
        }
        dispatch({ type: ADDCART, payload: state.cart });
        setTimeout(() => {
            dispatch({ type: "hide_loading" });
        }, 1000);

        localStorage.setItem("state", JSON.stringify(state));
    };
    return (
        <div className="row" style={{
            paddingTop: 100
        }}>
            <div className="col-2"></div>
            <div className="col-8">
                <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                            Sản phẩm yêu thích
                        </h1>
                        <h6 className="mb-0 text-muted">
                            {state.favourite.length} sản phẩm
                        </h6>
                    </div>
                    <hr className="my-4" />

                    {state.favourite.map((v, k) => {
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
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-muted">{v.name}</h6>
                                    <h6 className="text-black mb-0">
                                        {v.color}
                                    </h6>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 className="mb-0">
                                        {(v.finalprice * v.qty).toLocaleString(
                                            "vi",
                                            { style: "currency", currency: "VND" }
                                        )}
                                    </h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    {/* <button type="button" className="btn btn-danger">X</button> */}
                                    <Space>
                                        <Button
                                            type="text"
                                            onClick={() => {
                                                removefavourite(v);
                                            }}
                                        >
                                            x
                                        </Button>
                                    </Space>
                                </div>
                                <div className="col-md-4 col-lg-4 col-xl-2 d-flex">
                                    <Button
                                        style={{ backgroundColor: "#DABAAD", color: "white" }}
                                        onClick={() => addToCart(product)}
                                    >
                                        {/* <PlusOutlined
                                            style={{
                                                padding: 0,
                                                margin: 0
                                            }}
                                        /> */}
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                            </div>
                        );
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
            </div>

        </div>
    )
}
export default Favourite;