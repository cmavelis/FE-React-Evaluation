import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import Tag from '../components/Tag';

const SkillDetailPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.skills.data);
  const skill = data.filter((datum) => datum.id.toString() === id)[0];

  return (
    <div>
      <h1>{ `${skill.name}` }</h1>
      <Tag typeName={skill.type} />
      <p>{skill.detail}</p>
      <p>{`Learned ${moment(skill.DateLearned).format('MMMM YYYY')}`}</p>
    </div>
  );
};

export default SkillDetailPage;
