import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import { useParams } from "react-router-dom";
import { listOrder, listProducts } from "../services/productAction";

const OrderDetail = () => {
  const { idorder } = useParams();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const order = orders.find((e) => e.id === idorder);

  const refresh = async () => {
    const t = await listOrder();
    const g = await listProducts();
    setProducts(g);
    setOrders(t);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div
      style={{
        padding: "150px 50px",
        fontSize: 18,
      }}
    >
      <Steps
        current={order?.status}
        items={[
          {
            title: "Đơn hàng đã đặt",
          },
          {
            title: "Đã xác nhận",
          },
          {
            title: "Đang vận chuyển",
          },
          {
            title: "Đã giao hàng",
          },
          {
            title: "Hoàn thành",
          },
          {
            title: "Đã hủy",
          },
        ]}
      />
      <div>
        <h5
          style={{
            padding: "50px 0 10px 0",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Thông tin nhận hàng
        </h5>
        <b>{order?.name}</b>
        <div>Số điện thoại: {order?.phone}</div>
        <div>Địa chỉ: {order?.address}</div>
      </div>
      <div>
        <h5
          style={{
            padding: "50px 0 20px 0",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Thông tin thanh toán
        </h5>
        {order?.product.map((v, k) =>
          products?.map((e) => {
            if (e.id == v.id) {
              return (
                <div
                  key={k}
                  className="row mb-4 d-flex justify-content-between align-items-center"
                >
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={e?.thumbnail}
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3">
                    <h6 className="text-muted">{e?.name}</h6>
                    <h6 className="text-black mb-0">{v.color}</h6>
                  </div>
                  <div className="col-md-5 col-lg-5 col-xl-4 offset-lg-1">
                    <h6 className="mb-0">
                      {(e?.finalprice * e?.qty).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h6>
                  </div>
                </div>
              );
            }
          })
        )}

        <div className="d-flex justify-content-between mb-5">
          <h5 style={{
            paddingTop:"20px",
          fontWeight:"bold",
          fontSize:24
        }}>Tổng thanh toán</h5>
          {/* <h5>{(totals + priceTransport).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h5> */}
          <h5>
            {order?.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
