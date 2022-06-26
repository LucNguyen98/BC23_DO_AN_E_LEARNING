import React, { Suspense } from 'react';

export default function SuspenseComponent({ component, fallback }) {
  return <Suspense fallback={fallback}>{component}</Suspense>;
}

SuspenseComponent.defaultProps = {
  fallback: (
    <div className="container-fluild w-100 text-center">
      <div
        className="spinner-border mt-2"
        role="status"
        style={{ color: '#F14D5D' }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ),
};
