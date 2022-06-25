import React from 'react';

export default function Breadcrumbs() {
  return (
    <section className="page-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-8">
            <div className="title-block">
              <h1>About Us</h1>
              <ul className="header-bradcrumb justify-content-center">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active" aria-current="page">
                  About
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
