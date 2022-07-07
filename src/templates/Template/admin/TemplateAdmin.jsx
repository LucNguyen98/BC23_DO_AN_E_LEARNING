import React from 'react';
import { SuspenseComponent } from 'src/components';
// import { Footer, Header, ScrollToTop } from 'src/components';

export default function TemplateAdmin({ Component }) {
  return <SuspenseComponent component={Component} />;
}
