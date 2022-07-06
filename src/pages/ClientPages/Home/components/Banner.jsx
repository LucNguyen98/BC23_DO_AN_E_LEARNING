import React from 'react';
import { NavLinkComponent } from 'src/components';
import { COURSE_PATH } from 'src/constants/pathName';

export default function Banner() {
  return (
    <section className="banner-style-4 banner-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12 col-xl-6 col-lg-6">
            <div className="banner-content ">
              <span className="subheading">Hơn 3000 khoá học</span>
              <h1>
                Nâng cấp kỹ năng học tập của bạn là nâng cấp cuộc sống của bạn
              </h1>
              <p className="mb-40">
                Hơn 92% trên hơn 3000 học viên học tại Edumel học theo lộ trình
                và có việc làm tốt. Edumel đã triển khai chương trình Học lập
                trình trực tuyến Online tại CyberLearn để tạo điều kiện cho các
                bạn không có điều kiện học trực tiếp tại HCM có thể tham gia.
              </p>
              <div className="btn-container">
                <NavLinkComponent
                  to={COURSE_PATH}
                  className="btn btn-main rounded"
                >
                  Bắt đầu ngay
                </NavLinkComponent>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6 col-lg-6">
            <div className="banner-img-round mt-5 mt-lg-0 ps-5">
              <img
                src="/images/banner/banner_img.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
