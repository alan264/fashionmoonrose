import { Col } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const HeaderLayout=styled(Header)`
    background-color: white;
    color: #333333;
    height: max-content;
    padding-top: 20px;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 2;
    a{
        padding: 20px 20px;
        color: #333333;
        font-weight: 600;
    }
    
`;

export const Logo=styled(Col)`
    img{
        width: 50%;
    }
`

export const NavHeader=styled.div`
    a{
        text-decoration: none;
        font-size: 18px;
        &:hover{
            text-decoration: solid;
        }
    }
`

