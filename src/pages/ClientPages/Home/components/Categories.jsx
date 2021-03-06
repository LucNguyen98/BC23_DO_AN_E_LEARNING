import React from 'react';
import { NavLinkComponent } from 'src/components';
import { COURSE_PATH } from 'src/constants/pathName';
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
                Edumel vạch ra lộ trình học lập trình một cách chi tiết, bài
                bản, chuyên nghiệp, chuẩn nghề ĐH Arizona -USA, 100% thực hành
                theo dự án thực tế tránh lan man, luyện tập tư duy, logic nền
                tảng chuyên sâu dễ dàng phát triển lên senior, leader. Đi đúng
                lộ trình Edumel bạn sẽ tiết kiệm được thời gian, chi phí và có
                việc làm tốt nhất và bền vững để thăng tiến.
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
                      <NavLinkComponent
                        to={`${COURSE_PATH}/${cate?.maDanhMuc}`}
                      >
                        {cate?.tenDanhMuc}
                      </NavLinkComponent>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Categories);
