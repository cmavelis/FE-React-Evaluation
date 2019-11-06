import React from 'react';

import './PageContent.css';

const PageContent = (props) => (
  <div className="page-content">
    {/* eslint-disable-next-line */}
    {props.children}
  </div>
);

export default PageContent;
