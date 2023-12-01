import { Input } from "antd";
import styled from "styled-components";

export const ProductDetailComponent=styled.div`
font-size: 16px;
padding:120px 0;
margin: 20px 50px;
h4{
    font-size: 32px;
    margin: 0;
}
`;

export const ProductInfo= styled.div`
    padding: 10px 50px;
    font-size: 18px;
    /* text-align: center; */
    b{
        font-size: 20px;
        /* margin: 60px 0; */
    }
    h4{
        font-weight: 900;
        padding-bottom: 20px;
    }
`;

export const Color= styled.div`
    padding: 20px 0;
    i{
        margin: 20px 20px 0 0;
        font-size: 28px;
    }
`

export const Size = styled.div`
    padding: 20px 0;
`

export const Price = styled.div`
    padding: 20px 0;
    p{
        font-size: 24px;
        font-weight: bold;
    }

`

export const ValueSize = styled(Input)`
    width: 100px;
    text-align: center;
    padding: 10px;
    margin: 20px 20px 20px 0;
`;