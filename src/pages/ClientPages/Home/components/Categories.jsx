import React from 'react';

export default function Categories() {
  return (
    <section className="course-category-3 section-padding">
      <div className="container">
        <div className="row mb-70 justify-content-center">
          <div className="col-xl-8">
            <div className="section-heading text-center">
              <h2 className="font-lg">Categories you want to learn</h2>
              <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl col-lg-4 col-sm-6">
            <div className="single-course-category style-3 bg-1">
              <div className="course-cat-icon">
                <img
                  src="/images/icon/icon1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <a href="">Data Science &amp; Analytics</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-sm-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
