import React from 'react';
import { useSelector } from 'react-redux';

import CardContainer from '../components/CardContainer';
import DATA_TYPES from '../common/DataTypes';

const InterestsPage = () => {
  const interests = useSelector((state) => state.interests);
  return (
    <div>
      <CardContainer data={interests.data} dataType={DATA_TYPES.INTEREST} />
    </div>
  );
};

export default InterestsPage;
