import React from 'react';
import { useSelector } from 'react-redux';

import CardContainer from '../components/CardContainer';
import DATA_TYPES from '../common/DataTypes';

const SkillsPage = () => {
  const skills = useSelector((state) => state.skills);
  return (
    <div>
      <CardContainer data={skills.data} dataType={DATA_TYPES.SKILL} />
    </div>
  );
};

export default SkillsPage;
