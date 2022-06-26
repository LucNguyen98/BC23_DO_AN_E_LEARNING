import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Breadcrumbs({ location }) {
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <section className="page-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-8">
            <div className="title-block">
              <h1>About Us</h1>
              <ul className="header-bradcrumb justify-content-center">
                <li>
                  <NavLink to={'/'}>{'trang-chu'}</NavLink>
                </li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={index} className="active" aria-current="page">
                      {isLast ? (
                        <span>{name}</span>
                      ) : (
                        <NavLink to={routeTo}>{name}</NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Breadcrumbs);
