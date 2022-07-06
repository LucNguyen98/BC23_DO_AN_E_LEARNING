import React from 'react';
import Slider from 'react-slick';

export default function Testimonial() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial-4 section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-heading text-center mb-50">
              <h2 className="font-lg">HỌC VIÊN ĐÃ NÓI GÌ VỀ EDUMEL</h2>
              <p>
                Khám phá chương trình hoàn hảo của bạn trong các khóa học của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 col-xl-12">
            <Slider {...settings} className="testimonials-slides">
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote" />
                  </div>
                  <div className="testimonial-text mb-30">
                    Khóa học xác định những điều chúng tôi muốn thay đổi và sau
                    đó tìm ra những thứ cần được thực hiện để tạo ra kết quả
                    mong muốn. Các khóa học đã giúp tôi xác định rõ ràng các vấn
                    đề và tạo ra nhiều loại chất lượng hơn các giải pháp. Hỗ trợ
                    phân tích cấu trúc khác trong số các tùy chọn dẫn đến các
                    quyết định tốt hơn.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="https://i.pravatar.cc?u=Luc Nguyen"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Luc Nguyen</h4>
                      <span className="meta">FrontEnd</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote" />
                  </div>
                  <div className="testimonial-text  mb-30">
                    Khóa học xác định những điều chúng tôi muốn thay đổi và sau
                    đó tìm ra những thứ cần được thực hiện để tạo ra kết quả
                    mong muốn. Các khóa học đã giúp tôi xác định rõ ràng các vấn
                    đề và tạo ra nhiều loại chất lượng hơn các giải pháp. Hỗ trợ
                    phân tích cấu trúc khác trong số các tùy chọn dẫn đến các
                    quyết định tốt hơn.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="https://i.pravatar.cc?u=Ming Yuen"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Ming Yuen</h4>
                      <span className="meta">BackEnd</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote" />
                  </div>
                  <div className="testimonial-text  mb-30">
                    Khóa học xác định những điều chúng tôi muốn thay đổi và sau
                    đó tìm ra những thứ cần được thực hiện để tạo ra kết quả
                    mong muốn. Các khóa học đã giúp tôi xác định rõ ràng các vấn
                    đề và tạo ra nhiều loại chất lượng hơn các giải pháp. Hỗ trợ
                    phân tích cấu trúc khác trong số các tùy chọn dẫn đến các
                    quyết định tốt hơn.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="https://i.pravatar.cc?u=Trung Nguyen"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Trung Nguyen</h4>
                      <span className="meta">Design</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote" />
                  </div>
                  <div className="testimonial-text mb-30">
                    Khóa học xác định những điều chúng tôi muốn thay đổi và sau
                    đó tìm ra những thứ cần được thực hiện để tạo ra kết quả
                    mong muốn. Các khóa học đã giúp tôi xác định rõ ràng các vấn
                    đề và tạo ra nhiều loại chất lượng hơn các giải pháp. Hỗ trợ
                    phân tích cấu trúc khác trong số các tùy chọn dẫn đến các
                    quyết định tốt hơn.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="https://i.pravatar.cc?u=Bao Tran"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Bao Tran</h4>
                      <span className="meta">FullStack</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
