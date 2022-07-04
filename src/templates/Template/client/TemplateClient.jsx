import React from 'react';
import { Breadcrumbs, Footer, Header, ScrollToTop } from 'src/components';

export default function TemplateClient({
  Component,
  name,
  isScrollToTop,
  isBreadcrumb,
}) {
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
