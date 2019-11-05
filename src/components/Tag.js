import React from 'react';
import PropTypes from 'prop-types';

import './Tag.css';

const typeStyleLookup = {
  sport: '1',
  game: '2',
  essential: '3',
  practical: '4',
  professional: '5',
};

const Tag = (props) => {
  const { typeName } = props;
  const tagNumber = typeStyleLookup[typeName.toLowerCase()];

  const classNames = `card-info-tag card-info-tag-${tagNumber}`;

  return (
    <span className={classNames}>
      {typeName}
    </span>
  );
};


Tag.propTypes = {
  typeName: PropTypes.string.isRequired,
};

export default Tag;
