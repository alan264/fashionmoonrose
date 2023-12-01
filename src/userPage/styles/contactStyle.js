import { Form } from "antd";
import styled from "styled-components";

export const ContactLayout = styled.div`
margin-top: 80px;
    padding-top: 50px;
    position: relative;
    height: 1100px;

`
export const ContactTop=styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://flatforms.files.wordpress.com/2020/05/spring-wallpaper.001.jpeg);
    width: 100%;
    height: 500px;
    padding: 100px 50px;
    h3{
        font-size: 42px;
        font-weight: 900;
        color: white;
    }
    p{
        font-size: 20px;
        color: white;
        font-weight: bold;
    }
`

export const ContactBottom= styled.div`
    background-color: #5c5c5c;
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    position: absolute;
    top: 360px;
    left: 10%;
    padding: 80px 0;
`

export const FormContact = styled(Form)`
    background-color: white;
    padding:50px 100px 50px 0;
    border-radius: 20px;
    margin-left: 50px;
`
export const ContactInfo = styled.div`
    color: white;
    text-align: center;
    font-size: 16px;
    margin-top: 100px;
    h3{
        font-weight : bold;
        margin-bottom: 40px;
        
    }
    p{
        margin-bottom: 30px; 
    }
    span{
        padding-left: 20px;
    }
`


