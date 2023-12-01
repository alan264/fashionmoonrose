import React from 'react';
import { UserOutlined} from '@ant-design/icons';
import { Rate } from 'antd';


const EvaluateComponent = () => {
    return (
        <div style={{
            margin:"20px",
            textAlign:"center",
            fontSize:18,
            border:"1px solid #cccccc",
            borderRadius:"20px",
            padding:"40px 0"
        }}>
            <UserOutlined  style={{
                fontSize:32,
                border:"3px solid #222",
                borderRadius:"50%",
                padding:"10px",
                marginBottom:"20px"
            }} /><br/>
            <b>Trần Quốc Alan</b><br/>
            <Rate disabled defaultValue={2} style={{
                margin:"20px 0"
            }} /><br/>
            <p>Váy rất đẹp, tôi rất thích nó</p>
        </div>
    );
};

export default EvaluateComponent;