import moment from 'moment';
import React from 'react';
import { Button } from 'reactstrap';
import { NavLinkComponent } from 'src/components';
import { COURSE_PATH } from 'src/constants/pathName';

function MyCourse({ data, cancelCourse }) {
  const renderCourse = (course, index) => {
    return (
      <tr key={index} className="woocommerce-cart-form__cart-item cart_item">
        <td>
          <p>{course.maKhoaHoc}</p>
        </td>
        <td>
          <p>{course.tenKhoaHoc}</p>
        </td>
        <td className="product-thumbnail">
          <img
            width={324}
            height={324}
            src={course?.hinhAnh}
            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
            alt=""
          />
        </td>
        <td>
          <p>{moment(course.ngayTao).format('DD/MM/YYYY')}</p>
        </td>
        <td className="px-3">
          <Button
            title="Huỷ ghi danh"
            size="sm"
            color="danger"
            style={{
              backgroundColor: 'transparent',
              border: 0,
            }}
            onClick={() => cancelCourse(course.maKhoaHoc)}
          >
            <i className="fa fa-trash text-danger"></i>
          </Button>
        </td>
      </tr>
    );
  };

  const renderPages = () => {
    if (data?.length > 0)
      return data?.map((course, index) => renderCourse(course, index));
    return (
      <div
        className="text-center"
        style={{
          width: '100%',
          marginTop: '10%',
        }}
      >
        <p>Bạn chưa đăng ký khoá học nào!</p>
        <NavLinkComponent to={COURSE_PATH}>Đăng ký ngay</NavLinkComponent>
      </div>
    );
  };

  return (
    <section className="woocommerce single py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-12 mb-3">
            <h4>Khoá học của tôi</h4>
          </div>
          <div className="col-lg-12 col-xl-12">
            <div className="woocommerce-cart">
              <div className="woocommerce-notices-wrapper" />
              <form className="woocommerce-cart-form" action method>
                <table
                  className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>Mã Khóa Học</th>
                      <th>Tên Khóa Học</th>
                      <th>Hình Ảnh</th>
                      <th>Ngày Tạo</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{renderPages()}</tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(MyCourse);
