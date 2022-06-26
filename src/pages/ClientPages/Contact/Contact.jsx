import React from 'react';

export default function Contact() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>Contact Us</h1>
                <ul className="header-bradcrumb justify-content-center">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active" aria-current="page">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section start */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info-wrapper mb-5 mb-lg-0">
                <h3>
                  what is your story?
                  <span>Get in touch</span>
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
                  <h5>Moon Street Light Avenue, 14/05 Jupiter </h5>
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
                      Your message was sent successfully.
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
                        placeholder="Your Name"
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
                        placeholder="Email Address"
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
                        placeholder="Subject"
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
                        placeholder="Your Message"
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
                      Send Message
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
