import React from 'react';
import Btn from './Btn';
import Link from 'antd/es/typography/Link';

const CardOrder = (product) => {
    return (
        <div
        style={{
            display: "flex",
            justifyContent:"space-between",
            width:"100%",
            fontSize:16,
            padding:"40px 0",
            borderBottom:"1px solid #ccc"
        }}
        >
           <div
           style={{
            display:"flex"
           }}>
           <img 
            src='https://i.pinimg.com/564x/a8/21/45/a821451b7270b7e246c0a04bf0013739.jpg'
            style={{
                width:"100px"
            }}
            />
            <div
            style={{
                paddingLeft:40
            }}
            >
                <h5>
                Đầm ngắn họa tiết
            </h5>
            <span>Phân loại hàng: Đỏ </span>
            <p>
                Số lượng: 5
            </p>

            </div>
           </div>
           <div
           style={{
            textAlign:"center"
           }}
           >
            <p>
                Đã Xác Nhận
            </p>
            <Btn text='Hủy đơn hàng'/><br/>
            <Link to="/">
            Xem chi tiết đơn hàng
            </Link>
           </div>
            <div>
            <h4>5000</h4>
            </div>
        </div>
    );
};

export default CardOrder;