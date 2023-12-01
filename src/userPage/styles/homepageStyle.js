import { Rate } from "antd";
import { Content } from "antd/es/layout/layout";
import Slider from "react-slick";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const ContentLayout = styled(Content)`
    padding:100px 50px;
    color: #333333;
    @font-face {
  font-family: 'ginger';
  font-weight: normal;
  font-style: normal;
  src: url('/WebFashionMoonRose/public/font/Ginger/SVN-Ginger.otf') format('truetype');
  font-display: swap;
}

h3{
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin: 40px 0;
}
p{
  font-size: 16px;
}

`

export const Banner = styled.div`
img{
  padding-top:100px;
  width: 300px;
}
/* height: 500px; */
    text-align: center;
  p{
    font-size: 20px;
  }
    h1{

        font-family: 'ginger';
        font-size: 52px;
        margin: 0;
    }

`

export const Trending = styled.div`
  
`

export const SliderTrending = styled(Slider)`
div{
    background-color: red;
    margin: 10px;
    margin-left: 20px;
    border-radius: 10px;
  }
`;

export const Collection =styled.div`

`

export const ListProducts = styled.div`

`
export const Sales = styled.div`
  p{
    font-size: 30px;
    text-align: center;
  }
`

export const ContentSales = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.etsystatic.com/25907799/r/il/6b1798/2681514955/il_1588xN.2681514955_4ett.jpg);
  /* background-color: rgba(251, 248, 247, 10.4); */
  /* height: 500px; */
  text-align: center;
  padding-top: 15%;
  padding-bottom: 15%;
  h1,h2{
    font-family: 'ginger';
  
    margin: 0;
    font-weight: 900;
  }

  h1{
    color: #DABAAD;
    font-size: 150px;
  }

  h2{
    font-size: 150px;
    color: white;
    margin-top: -100px;
  }
`

export const GeneralComment = styled.div`

`

export const SlideItem = styled(SwiperSlide)`

height: 200px;
width: 200px;
border-radius: 20px;
color: white;
text-align: center;
padding-top: 120px;
font-size: 24px;
font-weight: bold;
`

export const RateProduct = styled(Rate)`
.ant-rate-star.ant-rate-star-full{
margin: 0 !important;
margin-inline-end:0;

}
.ant-rate-star.ant-rate-star-zero{
  margin: 0 !important;
margin-inline-end:0;
}
`