 import { Form, Input } from 'antd';
import styled from 'styled-components'
 

export const LoginLeft =styled.div`
    background-color:  #DABAAD;
    width: 100%;
    height: 100vh;
`;

export const LoginRight = styled.div`
padding: 100px 50px 0 50px;

    h1{
        text-align: center;
    }
`;

export const FormLogin = styled(Form)`
    Input{
        height: 40px;
    }
`;