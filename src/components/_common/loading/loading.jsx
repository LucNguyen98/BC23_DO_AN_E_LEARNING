import React from 'react';
import { useEffect } from 'react';
import './loading.scss';
export default function Loading({ loading = false }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  if (!loading) return null;

  return (
    <div className="loading">
      <div
        className="spinner-border mt-2"
        role="status"
        style={{ color: '#F14D5D' }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
