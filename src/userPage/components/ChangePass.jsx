import React from "react";
import { ContentStyle } from "../styles/changepassStyle";

const ChangePass =()=> {
    
        return (
            <div className="row">
                <div className="col-4"></div>
                <ContentStyle className="col-4 content-changepass">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><h6>Mật khẩu cũ</h6></label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><h6>Mật khẩu mới</h6></label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><h6>Xác nhận mật khẩu</h6></label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="button" class="btn btn-dark mt-4">Xác nhận</button>
                </ContentStyle>
                <div className="col-4"></div>
            </div>
        );
    
}
export default ChangePass;
