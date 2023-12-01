import { Col } from "antd";
import styled from "styled-components";
import '../../font/Modulus/VL-MODULUS-MEDIUM.otf'

export const FooterLayout = styled.div`
/* @font-face {
  font-family: 'ginger';
  font-weight: normal;
  font-style: normal;
  src: url('/font/Ginger.otf') format('truetype');
  font-display: swap;
}
font-family: 'ginger', serif; */
color: #333333;
padding:0 50px; 
text-align: center;
  background-color:  #F8F1EF;
    img{
        width: 180px;
    }
` 

export const FooterItem=styled(Col)`
  text-align: center;
    h4{
        font-size: 30px;
        font-weight: bold;
        margin: 0;
    }
    h5{
        font-size: 16px;
    }
   
    a{
        font-size: 14px;
        color: #333333;
        line-height: 35px;
    }
    p{
        line-height: 25px;
    }
    i{
        font-size: 22px;
        padding: 0 10px;
    }
`