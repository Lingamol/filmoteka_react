import styled from '@emotion/styled';
import StarIconfilled from '../../images/svg/StarFilled.svg';
import StarIconUnfilled from '../../images/svg/StarUnfilled.svg';

export const StarIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;
  background-image: ${props =>
    props.isFilled === true
      ? `url(${StarIconfilled})`
      : `url(${StarIconUnfilled})`};
`;
