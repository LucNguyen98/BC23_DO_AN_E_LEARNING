import React from 'react';
import { getCategoryImage } from 'src/helpers/getImage';
import { createClass } from 'src/utils/utils';

function Categories({ categories = [] }) {
  return (
    <section className="course-category-3 section-padding">
      <div className="container">
        <div className="row mb-70 justify-content-center">
          <div className="col-xl-8">
            <div className="section-heading text-center">
              <h2 className="font-lg">Các danh mục bạn muốn học</h2>
              <p>
                CyberSoft vạch ra lộ trình học lập trình một cách chi tiết, bài
                bản, chuyên nghiệp, chuẩn nghề ĐH Arizona -USA, 100% thực hành
                theo dự án thực tế tránh lan man, luyện tập tư duy, logic nền
                tảng chuyên sâu dễ dàng phát triển lên senior, leader. Đi đúng
                lộ trình CyberSoft bạn sẽ tiết kiệm được thời gian, chi phí và
                có việc làm tốt nhất và bền vững để thăng tiến.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {categories?.map((cate, index) => {
            return (
              <div key={index} className="col-xl col-lg-4 col-sm-6">
                <div
                  className={createClass(['single-course-category', 'style-3'])}
                >
                  <div className="course-cat-icon">
                    <img
                      src={getCategoryImage(cate?.maDanhMuc)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="course-cat-content">
                    <h4 className="course-cat-title">
                      <a href="">{cate?.tenDanhMuc}</a>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-xl col-lg-4 col-sm-6">
            <div className="single-course-category style-3 bg-2">
              <div className="course-cat-icon">
                <img
                  src="/images/icon/icon2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <a href="">Artificial Intellegence</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-sm-6">
            <div className="single-course-category style-3 bg-3">
              <div className="course-cat-icon">
                <img
                  src="/images/icon/icon3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <a href="">Algebra Math calculation</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-sm-6">
            <div className="single-course-category style-3 bg-4">
              <div className="course-cat-icon">
                <img
                  src="/images/icon/icon4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <a href="">Web Development</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-sm-6">
            <div className="single-course-category style-3 bg-5">
              <div className="course-cat-icon">
                <img
                  src="/images/icon/icon6.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <a href="">Digital Marketing &amp; SEO</a>
                </h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Categories);
