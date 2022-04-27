import React, { lazy, Suspense } from 'react';

const LazySquare = lazy(() => import('./Square'));

const Square = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySquare {...props} />
  </Suspense>
);

export default Square;
