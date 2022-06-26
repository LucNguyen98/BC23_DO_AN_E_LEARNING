import React from 'react';
import { Footer, Header, SuspenseComponent } from 'src/components';

export default function TemplateClient({ Component }) {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <SuspenseComponent component={<Component />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
