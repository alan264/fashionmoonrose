import React, { useEffect, useState } from "react";
import {
  NewpostText,
  NewpostLeft,
  ContainerStyle,
  TitleRightStyle,
  ImgRightStyle,
  TitleLeftStyle,
  ImgLeftStyle,
  BgImgStyle,
  CalendarStyle,
} from "../styles/blogStyle";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";
import UserContext from "../context/UserContext";
import { listBlog } from "../services/productAction";

const Blog = (props) => {
  const { state, dispatch } = React.useContext(UserContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const t = await listBlog();

    setBlogs(t);
  };
  return (
    <section>
      <ContainerStyle>
        <div className="row mt-4">
          <div className="col-1"></div>
          <div className="col-10 ">
            <div className="">
              <div className="mb-3 ">
                <NewpostText>
                  <h4>Bài viết mới</h4>
                </NewpostText>
              </div>
            </div>
            {blogs.map((v, k) => {
              // console.log(v.id);
              return (
                <div className="row main">
                  <ImgLeftStyle className="col-6 main-child">
                    <div className="card">
                      <NewpostLeft
                        img
                        src={v.avatar}
                        // src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&amp;q=70&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=768&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ"
                      />
                    </div>
                  </ImgLeftStyle>
                  <TitleRightStyle className="col-6 main-child">
                    Ngày đăng :<span>{v.date}</span>
                    <h1 className="mb-5 mt-3">{v.title}</h1>
                    <NavLink to={"/blogdetail/" + v.id}>
                      <Button type="text"> Xem bài viết</Button>
                    </NavLink>
                    <span> 3 phút đọc</span>
                  </TitleRightStyle>
                </div>
              );
            })}

            {/* <div className="row">
              <TitleLeftStyle className="col-6">
                Ngày đăng :<span>28 tháng 4 năm 2023</span>
                <h1 className="mb-5 mt-3">Một thương hiệu là một giọng nói</h1>
                <p>
                  Tuổi, bạn sẽ hỏi, những điều này là nhỏ. Đối với họ sau đó tự
                  quay lại. Tiến bộ để dạy anh ấy, chúng tôi rất đáng ngưỡng mộ.
                </p>
                <NavLink to={"/blogdetail"}>
                  <Button type="text"> Xem bài viết</Button>
                </NavLink>
                <span> 9 phút đọc</span>
              </TitleLeftStyle>
              <ImgRightStyle className="col-6 ">
                <div className="card">
                  <NewpostLeft
                    img
                    src="https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                  />
                </div>
              </ImgRightStyle>
            </div> 
            {/* ======================================== 
            <div className="row">
              <ImgLeftStyle className="col-6 ">
                <div className="card">
                  <NewpostLeft
                    img
                    src="https://img.freepik.com/free-photo/sensual-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-blue-studio-background-holding-trendy-handbag_285396-2929.jpg?w=2000"
                  />
                </div>
              </ImgLeftStyle>
              <TitleRightStyle className="col-6">
                <h1 className="mb-5">Khi bạn đang trên đường về nhà</h1>
                <p>
                  Nhưng những gì là đủ, đó là, bất cứ điều gì đã đến quá nhiều.
                  Do đó, bởi điều đó, do đó, chính nó sẽ được chữa lành.
                </p>
                <Button type="text">Xem bài viết</Button>
                <span> 3 phút đọc</span>
              </TitleRightStyle>
            </div>
            <div className="row">
              <TitleLeftStyle className="col-6">
                <h1 className="mb-5">Một thương hiệu là một giọng nói</h1>
                <Button type="text">Xem bài viết</Button>
                <span> 9 phút đọc</span>
              </TitleLeftStyle>
              <ImgRightStyle className="col-6 ">
                <div className="card">
                  <NewpostLeft
                    img
                    src="https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                  />
                </div>
              </ImgRightStyle>
            </div> */}
          </div>
        </div>
      </ContainerStyle>
    </section>
  );
};
export default Blog;
