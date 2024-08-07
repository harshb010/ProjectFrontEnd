import React from 'react'
import Image from './Image';
import ErrorBoundary from '../ErrorBoundary';

export default function Error() {
  return (
    <div className="container">
      <h1>Error Boundary Example </h1>
      <div className="row">
        <div className="col-4">
          <Image p1="https://i.tribune.com.pk/media/images/617241-Books-1381638164/617241-Books-1381638164.JPG"></Image>
        </div>
        <div className="col-4">
          <Image p1="https://i.tribune.com.pk/media/images/617241-Books-1381638164/617241-Books-1381638164.JPG"></Image>
        </div>
        <div className="col-4">
          <ErrorBoundary>
            <Image p1=""></Image>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
