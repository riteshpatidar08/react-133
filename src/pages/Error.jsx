import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>

        <h2>Page not found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/dashboard/overview">
          Back to Overview
        </Link>
      </div>
    </div>
  );
}

export default Error;