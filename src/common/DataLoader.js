import { useDispatch } from 'react-redux';

import { getInterests } from '../reducers/interests';
import { getSkills } from '../reducers/skills';

const DataLoader = () => {
  const dispatch = useDispatch();
  dispatch(getSkills());
  dispatch(getInterests());
  return null;
};

export default DataLoader;
