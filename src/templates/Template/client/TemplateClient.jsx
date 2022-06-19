import React from 'react';
import { Footer, Header } from 'src/components';

export default function TemplateClient({ Component }) {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Component />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
