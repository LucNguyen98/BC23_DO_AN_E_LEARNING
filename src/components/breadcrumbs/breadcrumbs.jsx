import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';
function Breadcrumbs({ name = '' }) {
  let location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <section className="page-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-8">
            <div className="title-block">
              <h1>{name}</h1>
              <ul className="header-bradcrumb justify-content-center">
                <li>
                  <NavLink to={'/'}>{'trang-chu'}</NavLink>
                </li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={index} aria-current="page">
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

export default Breadcrumbs;
