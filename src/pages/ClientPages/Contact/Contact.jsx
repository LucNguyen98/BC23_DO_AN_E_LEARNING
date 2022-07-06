import React from 'react';

export default function Contact() {
  return (
    <div>
      {/* Contact section start */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info-wrapper mb-5 mb-lg-0">
                <h3>
                  Bạn gặp phải sự cố?
                  <span>Hãy liên lạc</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores Feel Free to contact with us
                </p>
                <div className="contact-item">
                  <i className="fa fa-envelope" />
                  <h5>support@email.com</h5>
                </div>
                <div className="contact-item">
                  <i className="fa fa-phone-alt" />
                  <h5>+45 234 345467</h5>
                </div>
                <div className="contact-item">
                  <i className="fa fa-map-marker" />
                  <h5>Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <form
                className="contact__form form-row "
                method="post"
                action="mail.php"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: 'none' }}
                      role="alert"
                    >
                      Thông điệp của bạn đã được gửi thành công.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Họ Tên"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Chủ Đề"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        id="message"
                        name="message"
                        cols={30}
                        rows={6}
                        className="form-control"
                        placeholder="Tin Nhắn Của Bạn"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center">
                    <button
                      className="btn btn-main w-100 rounded"
                      type="submit"
                    >
                      Gửi Tin Nhắn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section End */}
      {/* Map section start */}
      <section className="map">
        <div id="map" />
      </section>
      {/* Map section End */}
    </div>
  );
}
