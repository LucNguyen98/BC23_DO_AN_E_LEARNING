import React from 'react';

export default function ErrorMessage({ isError, message }) {
  if (!isError) return null;
  return <p className="py-2 text-danger">{message}</p>;
}
