import React from 'react';

import { useParams } from 'react-router-dom';


const InterestDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      Interest #
      {id}
    </div>
  );
};

export default InterestDetailPage;
