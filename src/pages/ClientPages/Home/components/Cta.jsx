import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components';
import { COURSE_PATH } from 'src/constants/pathName';

export default function Cta() {
  const navigate = useNavigate();

  return (
    <section className="cta-5 mb--120 bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="cta-inner4">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-4 col-lg-5">
                  <div className="cta-img mb-4 mb-lg-0">
                    <img
                      src="/images/about/img_9.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="cta-content ps-lg-4">
                    <span className="subheading mb-10">
                      Không biết nên bắt đầu từ đâu ?
                    </span>
                    <h2 className="mb-20">
                      Bạn muốn biết Ưu đãi đặc biệt và Thông tin cập nhật của
                      các khóa học mới?
                    </h2>
                    <Button
                      title="Đăng ký ngay"
                      onClick={() => navigate(COURSE_PATH)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
