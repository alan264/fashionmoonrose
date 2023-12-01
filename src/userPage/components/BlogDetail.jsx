import React, { useState, useEffect } from "react";
import {
  TitleImgStyle,
  TitleStyle,
  TitleHeadStyle,
  TitleFooterStyle,
} from "../styles/blogdetailStyle";
import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";
import { listBlog } from "../services/productAction";

const BlogDetail = () => {
  const { state, dispatch } = React.useContext(UserContext);
  const { idblog } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const [par1, setPart1] = useState("");
  const [par2, setPar2] = useState("");
  const [par3, setPar3] = useState("");
  const [par4, setPar4] = useState("");
  const [par5, setPar5] = useState("");
  const [pic1, setPic1] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const t = await listBlog();
    setBlogs(t);
  };

  useEffect(() => {
    blogs?.map((e) => {
      if (e.id === idblog) {
        setAvatar(e.avatar);
        setTitle(e.title);
        setPart1(e.par1);
        setPic1(e.picture1);
        setPar2(e.par2);
        setPar3(e.par3);
        setPar4(e.par4);
        setPar5(e.par5);
        setDate(e.date);
      }
    });
  }, [idblog, blogs]);

  return (
    <section style={{ padding: "100px 50px", fontSize: 16 }}>
      <div className="container mt-5">
        <TitleHeadStyle className="row mb-5">
          <div className="col-6">
            <TitleStyle className="box-title">
              Ngày đăng :<span>{date}</span>
              <h1 className="mb-5 mt-3">{title}</h1>
              <p>2 phút đọc</p>
            </TitleStyle>
          </div>
          <div className="col-6 right">
            <TitleImgStyle>
              <img
                className="mb-5"
                src={avatar}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "600",
                  padding: "50px 50px 0 0",
                }}
              />
            </TitleImgStyle>
          </div>
        </TitleHeadStyle>

            <p style={{ width: "100%", fontSize: 18 }} className="mb-5">
              {par1}
            </p>
            <img
              style={{ width: "100%" }}
              className="mb-5"
              src={pic1}
              alt="Picture"
            />
            <p className="mb-5" style={{ fontSize: 18, width: "100%" }}>
              {par2}
            </p>
            <p className="mb-5" style={{ fontSize: 18 }}>
              {par3}
            </p>

            <Button className="mt-4" type="text" style={{fontSize:18}}>
              Chia sẻ câu chuyện này
            </Button>
            <div className="mb-5">
              <Button type="text">
                <FacebookOutlined />
              </Button>
              <Button type="text">
                <InstagramOutlined />
              </Button>
              <Button type="text">
                <TwitterOutlined />
              </Button>
            </div>
          </div>
  

    </section>
  );
};

export default BlogDetail;
