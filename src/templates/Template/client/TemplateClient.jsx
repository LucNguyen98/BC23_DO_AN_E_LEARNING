import React from 'react';
import {
  Breadcrumbs,
  Footer,
  Header,
  ScrollToTop,
  SuspenseComponent,
} from 'src/components';

export default function TemplateClient({
  Component,
  name,
  isScrollToTop,
  isBreadcrumb,
}) {
  return (
    <SuspenseComponent
      component={
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
      }
    />
  );
}
