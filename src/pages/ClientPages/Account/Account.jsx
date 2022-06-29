import React from 'react';
import { Button } from 'src/components';
export default function Account() {
  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                alt=""
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-9">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Thông tin tài khoản</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label htmlFor="username" className="labels">
                    Tài khoản
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder=""
                    defaultValue
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="fullName" className="labels">
                    Họ tên
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="form-control"
                    defaultValue
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="phone" className="labels">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                    defaultValue
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="email" className="labels">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    value={'edogaru@mail.com.my'}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <Button title="Save Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
