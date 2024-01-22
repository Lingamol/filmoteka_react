import Star from 'components/Star/Star';
import { ListFlex } from './StarList.styled';

const StarList = ({ starLimit = 5, filled }) => {
  const starList = [];

  for (let i = 0; i < starLimit; i++) {
    starList.push(<Star key={i} filled={filled} />);
  }
  return <ListFlex>{starList}</ListFlex>;
};
export default StarList;
