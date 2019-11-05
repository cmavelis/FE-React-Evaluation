import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import './CardContainer.css';

const CardContainer = (props) => {
  const { data, dataType } = props; // TODO: replace dataType?

  return (
    <div className="card-container">
      { data.map((card) => card && (
        <Card
          key={`card-${card.name}`}
          id={card.id}
          name={card.name}
          type={card.type}
          detail={card.detail}
          label={dataType}
        />
      ))}
    </div>
  );
};


CardContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataType: PropTypes.string.isRequired,
};

export default CardContainer;
