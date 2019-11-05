import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Tag from './Tag';

import './Card.css';

const Card = (props) => {
  const {
    id, name, type, label, detail,
  } = props;
  const url = `/${label}/${id}`;
  const history = useHistory();

  const handleClick = () => {
    history.push(url);
  };

  const displayLabel = label.charAt(0).toUpperCase() + label.slice(1);

  return ( // TODO: fix a11y ESLint errors or use a library
    <div className="card" onClick={handleClick} role="button">
      <div className="card-info-wrapper">
        <span className="card-title">{`${displayLabel} ${id}`}</span>
        <span className="card-info-label">NAME:</span>
        <span className="card-info-item">{`${name}`}</span>
        <span className="card-info-label">TYPE:</span>
        <span><Tag typeName={type} /></span>
        <span className="card-info-footer">{`${detail}`}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  detail: PropTypes.string,
};

Card.defaultProps = {
  detail: '',
};

export default Card;
