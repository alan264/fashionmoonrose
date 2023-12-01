import { Button } from 'antd'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const ContentStyle = styled.div`
  padding: 100px 45px 0px 45px;
    border-radius: 20px;
    text-align: center;
    /* height: 800px; */
    background-color: #DABAAD;    ;
    .choice{
    opacity: 0.7;
    text-align: center;
    text-decoration:none;
    }
    .choice1 :hover{
    color: black;
    /* border: 3px solid #DABAAD; */
    border-radius: 20px;
    background-color: black;
    color: #DABAAD;
    
}
`;
export const ChoiceStyle = styled.div`
    a{
        color: black;
        text-decoration: none;
    }
    button{
        border-radius: 20px;
        padding:5px 25px;
    }
  
`;

