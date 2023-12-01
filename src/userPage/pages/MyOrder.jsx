import React, { useState, useEffect } from "react";
import CardOrder from "../components/CardOrder";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { listOrder, listProducts } from "../services/productAction";
import "bootstrap/dist/css/bootstrap.css";
import Btn from "../components/Btn";
import { Link, useNavigate } from "react-router-dom";
import db from "../../db";

const items = [
  {
    label: "Tất Cả",
    key: "all",
  },
  {
    label: "Chưa Xác Nhận",
    key: "unconfimred",
  },
  {
    label: "Đã Xác Nhận ",
    key: "comfirmed",
  },
  {
    label: "Đang Vận Chuyện ",
    key: "shipping",
  },
  {
    label: "Đã Giao Hàng ",
    key: "shipped",
  },
  {
    label: "Đã Hủy ",
    key: "cancelled",
  },
  {
    label: "Hoàn Thành ",
    key: "complete",
  },
];
const MyOrder = () => {
  const [current, setCurrent] = useState("mail");
  const [order, setOrder] = useState([]);
  const [searchID, setSearchID] = useState("");
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const handleSearch = (e) => {
    setSearchID(e.target.value);
  };

  function filterOrders(orders, searchID, statusFilter) {
    return orders.filter((o) => {
      const idMatch = o.id.toString().includes(searchID);
      return idMatch;
    });
  }
  const filteredOrders = filterOrders(order, searchID);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    refresh();
  }, []);
  const refresh = async () => {
    const f = await listOrder();
    const g = await listProducts();
    setProducts(g);
    setOrder(f);
  };

  const getStatus = (e) => {
    if (e == "1") {
      return <h6 className="text-black mb-0">Chờ xác nhận</h6>;
    }
    if (e == "2") {
      return <h6 className="text-black mb-0">Đã xác nhận</h6>;
    }
    if (e == "3") {
      return <h6 className="text-black mb-0">Đang giao hàng</h6>;
    }
    if (e == "4") {
      return <h6 className="text-black mb-0">Đã giao hàng</h6>;
    }
    if (e == "5") {
      return <h6 className="text-black mb-0">Hoàn thành</h6>;
    }
    if (e == "6") {
      return <h6 className="text-black mb-0">Đã hủy</h6>;
    }
  };
  const onOrderDetail = (id) => {
    navigate("/orderdetail/" + id);
  };
  const updateOrderStatus = async (id, newStatus) => {
    try {
       const conn = db.collection("order").doc(id);
      // Gọi đến API để cập nhật trạng thái mới cho đơn hàng
  // const collectionRef = db.firestore().collection("order");
  // const newDocRef = collectionRef.doc(); // Tạo một document mới mà không cung cấp ID
  // const newDocId = newDocRef.id;
              conn.update({
                  status:newStatus,
                  
              });
      
      // Cập nhật danh sách đơn hàng trong state
      setOrder((prevOrders) =>
        prevOrders.map((order) => {
          if (order.id === id) {
            return { ...order, status: newStatus };
          } else {
            return order;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        padding: "150px 50px ",
      }}
    >
      <div className="col">
        <label for="inputPassword5" className="form-label">
          Tìm kiếm
        </label>
        <input
          type="text"
          id="searchID"
          className="form-control"
          aria-labelledby="passwordHelpBlock"
          onChange={handleSearch}
          value={searchID}
        />
        <div id="passwordHelpBlock" className="form-text">
          Nhập mã đơn hàng cần tìm vào ô
        </div>
      </div>
      <hr
        style={{
          padding: "20px 0",
        }}
      />

      {searchID &&
        filteredOrders.map((e, k) => {
          const renderOption = (value, label) => {
            // Kiểm tra nếu trạng thái đơn hàng là "6" thì chỉ hiển thị tùy chọn "Hủy"
            if (e.status === "6" && value !== "6") {
              return null;
            }

            // Kiểm tra nếu trạng thái đơn hàng là "5" thì chỉ hiển thị tùy chọn "Hoàn thành"
            if (e.status === "5" && value !== "5") {
              return null;
            }

            // Kiểm tra nếu trạng thái đơn hàng là "1" hoặc "2" thì chỉ hiển thị tùy chọn "Chờ xác nhận" hoặc "Đã xác nhận"
            if (
              (e.status === "1" || e.status === "2") &&
              (value === "1" || value === "2")
            ) {
              return (
                <option value={value} key={value}>
                  {label}
                </option>
              );
            }

            // Hiển thị tất cả các tùy chọn khác
            return (
              <option value={value} key={value}>
                {label}
              </option>
            );
          };

          return (
            <div className="row mb-4 d-flex justify-content-between align-items-center">
              <div className="col">
                <h6 className="text-muted">Mã đơn hàng</h6>
                <h6 className="text-black mb-0">{e.id}</h6>
              </div>
              <div className="col">
                <h6 className="text-muted">Tên khách hàng</h6>
                <h6 className="text-black mb-0">{e.name}</h6>
              </div>
              <div className="col">
                <h6 className="text-muted">SĐT</h6>
                <h6 className="text-black mb-0">{e.phone}</h6>
              </div>
              <div className="col">
                <h6 className="text-muted">Địa Chỉ</h6>
                <h6 className="text-black mb-0">{e.address}</h6>
              </div>
              <div className="col">
                <h6 className="text-muted">mail</h6>
                <h6 className="text-black mb-0">{e.mail}</h6>
              </div>
              <div className="col">
                <h6 className="text-muted">Tổng thanh toán</h6>
                <h6 className="text-black mb-0">{e.price}</h6>
              </div>
              <div className="col">
                <h6 className="text-muted">Trạng thái</h6>
                {getStatus(e.status)}
              </div>
              <div className="col">
                <Btn
                  text="Xem chi tiết đơn hàng"
                  onClick={() => onOrderDetail(e.id)}
                />
              </div>
              <div className="col">
                <Btn
                  text="Hủy đơn hàng"
                  onClick={(event) => {
                    const newStatus = "6";
                    // Tạo ra đối tượng đơn hàng mới với trạng thái mới
                    const updatedOrder = { ...e, status: newStatus };
                    // Cập nhật đơn hàng trong state
                    setOrder((prevOrders) =>
                      prevOrders.map((order) =>
                        order.id === e.id ? updatedOrder : order
                      )
                    );
                    // Cập nhật trạng thái của đơn hàng trên server
                    updateOrderStatus(e.id, newStatus);
                  }}
                />
              </div>
            </div>
          );
        })}
      {/* <Menu
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 50,
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div>
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
      </div>
      <div></div> */}
    </div>
  );
};

export default MyOrder;
