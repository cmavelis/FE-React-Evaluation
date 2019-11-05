import React from 'react';

import './PageContent.css';

const PageContent = (props) => (
  <div className="page-content">
    {props.children}
  </div>
);

export default PageContent;
