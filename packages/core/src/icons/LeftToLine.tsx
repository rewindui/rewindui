import * as React from 'react';

export const LeftToLineIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    style={{ flexShrink: 0 }}
    viewBox="0 0 448 512"
    className={className}
  >
    <path d="M107.3 283.3L230.1 406.1c6.4 6.4 15 9.9 24 9.9c18.7 0 33.9-15.2 33.9-33.9l0-62.1 128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0 0-62.1c0-18.7-15.2-33.9-33.9-33.9c-9 0-17.6 3.6-24 9.9L107.3 228.7C100.1 235.9 96 245.8 96 256s4.1 20.1 11.3 27.3z" />
    <path
      style={{ opacity: 0.25 }}
      d="M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64z"
    />
  </svg>
);
