import React from 'react';

export default function Features() {
  return (
    <section className="features-3 section-padding-top ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-heading mb-50 text-center">
              <h2 className="font-lg">Thay đổi cuộc sống của bạn</h2>
              <p>
                Khám phá chương trình hoàn hảo của bạn trong các khóa học của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
            <div className="feature-item feature-style-top hover-shadow rounded border-0">
              <div className="feature-icon">
                <i className="flaticon-teacher" />
              </div>
              <div className="feature-text">
                <h4>Giảng viên chuyên nghiệp</h4>
                <p>
                  Phát triển các kỹ năng cho nghề nghiệp của các chuyên ngành
                  khác nhau bao gồm cả máy tính
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
            <div className="feature-item feature-style-top hover-shadow rounded border-0">
              <div className="feature-icon">
                <i className="flaticon-layer" />
              </div>
              <div className="feature-text">
                <h4>Tự phát triển</h4>
                <p>
                  Phát triển các kỹ năng cho sự nghiệp của các chuyên ngành khác
                  nhau bao gồm máy tính.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
            <div className="feature-item feature-style-top hover-shadow rounded border-0">
              <div className="feature-icon">
                <i className="flaticon-video-camera" />
              </div>
              <div className="feature-text">
                <h4>Học từ xa</h4>
                <p>
                  Phát triển các kỹ năng cho sự nghiệp của các chuyên ngành khác
                  nhau bao gồm cả ngôn ngữ
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
            <div className="feature-item feature-style-top hover-shadow rounded border-0">
              <div className="feature-icon">
                <i className="flaticon-lifesaver" />
              </div>
              <div className="feature-text">
                <h4>Hỗ trợ trọn đời</h4>
                <p>
                  Phát triển các kỹ năng cho sự nghiệp của các chuyên ngành khác
                  nhau bao gồm cả ngôn ngữ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
