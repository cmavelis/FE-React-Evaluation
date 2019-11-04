import React from 'react';
import { useSelector } from 'react-redux';

import CardContainer from '../components/CardContainer';

const SkillsPage = () => {
  const skills = useSelector((state) => state.skills);
  return (
    <div>
        Skills Page
      <CardContainer data={skills.data} />
    </div>
  );
};

export default SkillsPage;
