import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Tag from '../components/Tag';

const InterestDetailPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.interests.data);
  const interest = data.filter((datum) => datum.id.toString() === id)[0];

  return (
    <div>
      <h1>{ `${interest.name}` }</h1>
      <Tag typeName={interest.type} />
      <p>{interest.detail}</p>
      { interest.current ? 'Current interest' : 'Past interest'}
    </div>
  );
};

export default InterestDetailPage;
