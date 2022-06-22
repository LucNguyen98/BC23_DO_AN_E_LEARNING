import React from 'react';

export default function Statistics() {
  return (
    <section className="counter-section4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 counter-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="counter-item mb-5 mb-lg-0">
                  <div className="count">
                    <span className="counter h2">2000</span>
                    <span>+</span>
                  </div>
                  <p>Students</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-item mb-5 mb-lg-0">
                  <div className="count">
                    <span className="counter h2">1200</span>
                  </div>
                  <p>Online Courses</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-item mb-5 mb-lg-0">
                  <div className="count">
                    <span className="counter h2">2256</span>
                  </div>
                  <p>Finished Seasons</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-item">
                  <div className="count">
                    <span className="counter h2">100</span>
                    <span>%</span>
                  </div>
                  <p>Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
