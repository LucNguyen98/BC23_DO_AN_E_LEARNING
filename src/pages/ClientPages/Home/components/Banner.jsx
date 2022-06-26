import React from 'react';

export default function Banner() {
  return (
    <section className="banner-style-4 banner-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12 col-xl-6 col-lg-6">
            <div className="banner-content ">
              <span className="subheading">Over 3000 Course Available</span>
              <h1>Upgrade your learning Skills &amp; Upgrade your life</h1>
              <p className="mb-40">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                ullam libero magni reiciendis quam ipsa blanditiis, facilis
                velit eaque illo?
              </p>
              <div className="btn-container">
                <a href="" className="btn btn-main rounded">
                  Find Courses
                </a>
                <a href="" className="btn btn-white rounded ml-3">
                  Get started{' '}
                </a>
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
