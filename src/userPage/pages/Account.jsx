import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import PersonalInfo from "../components/PersonalInfo";
// import ChangePass from "../components/ChangePass";
// import { Acc } from "../style/accountStyle";
import { ContentStyle,ChoiceStyle } from "../styles/accountStyle";
import ChangePass from "../components/ChangePass";
import PersonalInfo from "../components/PersonalInfo";
import Btn from "../components/Btn";

const Account = () => {
    const [info, setInfo]= useState(false);
    const [changepass, setChangepass] = useState(false)

    const hanldeInfo=()=>{
        setInfo(true)
        setChangepass(false)
    };


    const hanldeChangePass =()=>{
        setInfo(false)
        setChangepass(true)
    }
    return (
        <div>
        <section>
            <div className="container">
                <div className="row mt-3 mb-5">
                    <div className="col-3"></div>
                    <ContentStyle className="col-6 mt-3 content-acc">
                        <h1 style={{
                            color:"white",
                            fontWeight:900
                        }}>Tài khoản của tôi</h1>
                        <hr class="my-4" />

                        <div className="row mb-3 choice">
                            <div className="col-2">
                            </div>
                            <ChoiceStyle className="col-4 choice1">

                                <button onClick={hanldeInfo} >Hồ sơ</button>
                            </ChoiceStyle>
                            <ChoiceStyle className="col-4 choice1">
                                <button onClick={hanldeChangePass} >Đổi mật khẩu</button>
                            </ChoiceStyle>
                        </div>
                       

                    </ContentStyle>
                    {changepass && <ChangePass/>}
                       {info && <PersonalInfo/>}
                </div>
            </div>

        </section>
        {/* <NavAccount /> */}

    </div>
    );
};

export default Account;
