import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors, timingFunction, duration } from 'styles/stylesLayout';
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;

  font-weight: 500;
  line-height: 1.17;
  text-transform: uppercase;
`;
// export const ListItem = styled.li`
//   &:not(:last-of-type) {
//     margin-right: 39px;
//   }
// `;
export const StyledLink = styled(NavLink)`
  &:not(:last-of-type) {
    margin-right: 39px;
  }
  position: relative;
  color: ${colors.whiteColor};

  transition: color ${duration.dur250} ${timingFunction.cb1};

  &.active::after {
    content: '';
    width: 100%;
    height: 3px;
    border-radius: 2px;

    position: absolute;

    left: 0.5px;
    bottom: -4px;

    background-color: ${colors.redlLiningColor};
  }

  &:hover {
    color: darkgrey;
  }
`;
