import styled from "styled-components";

export const Card = styled.div`
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
`;