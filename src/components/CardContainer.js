import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const { data } = props;

  return (
    <div className="card-container">
      { data.map((card) => card.name && <div key={`card-${card.name}`}>{card.name}</div>)}
    </div>
  );
};


CardContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  //   type: PropTypes.string,
  //   detail: PropTypes.string,
  // }).isRequired,
};

export default CardContainer;
