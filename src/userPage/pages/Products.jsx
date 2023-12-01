import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row,Checkbox  } from "antd";
import CartProduct from "../components/CardProduct";
import {
  listProducts,
  listCategories,
  addCart,
} from "../services/productAction";
import UserContext from "../context/UserContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { state, dispatch } = React.useContext(UserContext);

  useEffect(() => {
    refresh();
    getListCategories();
  }, []);

  const refresh = async () => {
    const t = await listProducts();

    setProducts(t);
  };

  const getListCategories = async () => {
    const c = await listCategories();
    setCategories(c);
  };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(state?.searchValue.toLowerCase())
);

console.log(filteredProducts)

  return (
    <div style={{padding:"100px 50px 100px 50px"}}>

            {categories.map((v) => {
              return (
                <div key={v?.name}>
                  <h4 style={{paddingTop:30,fontWeight:900}}>{v.name}</h4>
                  <Row>
                    {filteredProducts.map((e, k) => {
                      if (e.type === v.name) {
                        return (
                          <Col key={k} span={6}>
                            <CartProduct product={e} />
                          </Col>
                        );
                      }
                      return null; // Add this line to handle the cases where the product doesn't match the category
                    })}
                  </Row>
                </div>
              );
            })}

    </div>
  );
};

export default Products;
