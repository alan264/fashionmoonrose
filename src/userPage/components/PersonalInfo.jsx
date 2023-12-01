import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const PersonalInfo = () => {
  return (
    <section>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 mb-5 content-info">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10"></div>
            </div>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <h6>Tên đăng nhập</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <h6>Số điện thoại</h6>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  <h6>Giới tính</h6>
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Nam</option>
                  <option value="1">Nữ</option>
                  <option value="2">Khác</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  <h6>Ngày sinh</h6>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <h6>Địa chỉ</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <button type="button" class="btn btn-success">
                    <h6>Lưu thông tin</h6>
                  </button>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                  <button type="button" class="btn btn-danger">
                    <h6>Xoá tài khoản</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;
