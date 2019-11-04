import React from 'react';
import { useSelector } from 'react-redux';

import CardContainer from '../components/CardContainer';

const InterestsPage = () => {
  const interests = useSelector((state) => state.interests);
  return (
    <div>
        Interests Page
      <CardContainer data={interests.data} />
    </div>
  );
};

export default InterestsPage;
