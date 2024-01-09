import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div className="noPageFoundOutContainer">
    <div className="noPageFoundContainer">
      <h1 className="noPageFoundTitle">Page not found</h1>
      <p className="noPageFoundMessage">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link to="/" className="noPageFoundLink">
        Go to Home Page
      </Link>
    </div>
    </div>
  </Layout>
);

export default NotFoundPage;
