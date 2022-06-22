import React from 'react';

export default function Cta() {
  return (
    <section className="cta-5 mb--120 bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="cta-inner4">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-4 col-lg-5">
                  <div className="cta-img mb-4 mb-lg-0">
                    <img
                      src="/images/about/img_9.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="cta-content ps-lg-4">
                    <span className="subheading mb-10">
                      Not sure where to start?
                    </span>
                    <h2 className="mb-20">
                      {' '}
                      Want to know Special Offers &amp; Updates of new courses?
                    </h2>
                    <a href="" className="btn btn-main rounded">
                      {' '}
                      Join NOw
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
