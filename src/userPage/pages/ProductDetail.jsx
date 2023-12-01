import React, { useState, useEffect } from "react";
import {
  ProductDetailComponent,
  ProductInfo,
  Color,
  Size,
  Price,
  ValueSize,
} from "../styles/productDetailStyle";
import { Col, Row, Input } from "antd";
import Btn from "../components/Btn";
import { ListProducts } from "../styles/homepageStyle";
import CartProduct from "../components/CardProduct";
import {
  listProducts,
  listCategories,
  addCart,
} from "../services/productAction";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import db from "../../db";
import { useNavigate } from "react-router-dom";
import { PUSH_TO_ORDER, UPDATECART } from "../contants/productsContants";

const ProductDetail = () => {
  const { state, dispatch } = React.useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  // const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    refresh();
    getListCategories();
  }, []);

  const refresh = async () => {
    const t = await listProducts();
    setProducts(t);
  };

  const product = products.find((e) => e.id === id);

  const getListCategories = async () => {
    const c = await listCategories();
    setCategories(c);
  };

  const addToCart = (product) => {
    let check = false;
    state.cart.map((e) => {
      if (e.id == product.id) {
        e.qty = e.qty + 1;
        check = true;
      }
      return e;
    });
    if (check == false) {
      products.map((e) => {
        if (e.id == product.id) {
          e.qty = 1;
          state.cart.push(e);
        }
      });
    }
    dispatch({ type: "UPDATECART", payload: state.cart });

    localStorage.setItem("state", JSON.stringify(state));
  };

  const onPayment = () => {
    dispatch({ type: PUSH_TO_ORDER, payload: product });
    navigate("/payment");
  };

  return (
    <div style={{
    }}>
      <ProductDetailComponent>
        <Row>
          <Col span={12} style={{ textAlign: "center" }}>
            <img src={product?.thumbnail} />
          </Col>
          <Col span={12}>
            <ProductInfo>
              <h4>{product?.name}</h4>
              <p>{product?.introduce}</p>
              <Color>
                <b>Màu sắc : </b>
                <br />
                <i className="fa-solid fa-circle" style={{ color: "#bc2a32", fontSize: "24px" }}></i>
                <i className="fa-solid fa-circle" style={{ color: "#773d49", fontSize: "24px" }}></i>
                <i className="fa-solid fa-circle" style={{ color: "#3a6380", fontSize: "24px" }}></i>
                <i className="fa-solid fa-circle" style={{ color: "#eedcd8", fontSize: "24px" }}></i>
                <i className="fa-solid fa-circle" style={{ color: "#000000", fontSize: "24px" }}></i>
              </Color>
              <Size>
                <b>Chọn kích cỡ : </b> <br />
                <ValueSize value="XS" />
                <ValueSize value="S"  />
                <ValueSize value="M"  />
                <ValueSize value="L"  />
                <ValueSize value="XL"  />
              </Size>
              <Price>
                <b>Giá</b>
                <p>
                  {product?.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </Price>
              <Btn
                text="Thêm vào giỏ hàng"
                onClick={() => addToCart(product)}
              ></Btn>
              <Btn text="Mua ngay" onClick={() => onPayment(id)} ></Btn>
            </ProductInfo>
          </Col>
        </Row>
      </ProductDetailComponent>
      <ListProducts>
        <h3 style={{ textAlign: "center", fontSize: 42 }}>Dành cho bạn</h3>
        <Row>
          {products.map((e, k) => {
            return (
              <Col key={k} span={6}>
                <CartProduct
                  product={e}
                  //   name={e.name}
                  //   price={e.finalprice}
                  //   src={e.thumbnail}
                  //   addToCart={()=>addToCart(e,k)}
                  //   addToFavourite={()=>addToFavourite(e,k)}
                />
              </Col>
            );
          })}
        </Row>
      </ListProducts>
    </div>
  );
};

export default ProductDetail;
