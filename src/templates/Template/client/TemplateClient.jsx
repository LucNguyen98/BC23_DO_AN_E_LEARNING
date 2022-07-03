import React from 'react';
import { Breadcrumbs, Footer, Header, ScrollToTop } from 'src/components';
import {
  LOGIN_PATH,
  REGISTER_PATH,
  COURSE_SEARCH_PATH,
} from 'src/constants/pathName';

const NOT_BREADCRUMB = ['/', REGISTER_PATH, LOGIN_PATH, COURSE_SEARCH_PATH];

export default function TemplateClient({
  Component,
  path,
  name,
  isScrollToTop,
}) {
  const isBreadcrumb = !path || !NOT_BREADCRUMB.includes(path);
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <main>
          {isBreadcrumb && <Breadcrumbs name={name} />}
          <Component />
        </main>
        <footer>
          <Footer />
        </footer>
        {isScrollToTop && <ScrollToTop />}
      </div>
    </div>
  );
}
