import React from 'react';
import { Breadcrumbs, Footer, Header, SuspenseComponent } from 'src/components';

export default function TemplateClient({ Component, path }) {
  const isBreadcrumb = !path || path !== '/';
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <main>
          {isBreadcrumb && <Breadcrumbs />}
          <SuspenseComponent component={<Component />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
