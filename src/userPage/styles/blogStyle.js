import styled from "styled-components";

export const NewpostLeft = styled.img`
    width:100%;
    height:600px;
`
export const ContainerStyle = styled.div`
    padding-left:0;

    @media screen and (max-width: 992px) {
    .main{
        width: 900px;
    }
    .main-child{
        width: 50%;
    }
    }
    @media screen and (max-width: 768px) {
    .main{
        width: 100%;
    }
    .main-child{
        width: 100%;
    }
    }

`
export const NewpostText = styled.h4`
    background-color: #DABAAD;
    padding:20px;
    width: 170px;
    /* border-radius:20px; */

`
export const TitleRightStyle = styled.div`
    padding: 180px 80px;
    text-align:left;
    
`;
export const TitleLeftStyle = styled.div`
    padding: 180px 80px;
    text-align:right;
    
`;
export const ImgRightStyle = styled.div`
    padding-left: 0;
`
export const ImgLeftStyle = styled.div`
    padding-right: 0;
    
`
export const BgImgStyle = styled.div`
        background-image:url(https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ) ;
        width: 700px;
        height: 1316px;
    
`;