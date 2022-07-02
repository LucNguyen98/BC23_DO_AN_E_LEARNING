import React from 'react';
import Slider from 'react-slick';

export default function Testimonial() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="assets/images/clients/testimonial-avata-01.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Cory Zamora</h4>
                      <span className="meta">Marketing Specialist</span>
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
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="assets/images/clients/testimonial-avata-02.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Jackie Sanders</h4>
                      <span className="meta">Marketing Manager</span>
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
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="assets/images/clients/testimonial-avata-03.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Nikolas Brooten</h4>
                      <span className="meta">Sales Manager</span>
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
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="assets/images/clients/testimonial-avata-04.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Terry Ambady</h4>
                      <span className="meta">Marketing Manager</span>
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
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>
                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src="assets/images/clients/testimonial-avata-03.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Nikolas Brooten</h4>
                      <span className="meta">Sales Manager</span>
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
