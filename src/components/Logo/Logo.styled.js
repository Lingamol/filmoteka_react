import styled from '@emotion/styled';
import { colors, duration, timingFunction } from 'styles/stylesLayout';
export const HeaderLogo = styled.div``;
export const LogoLink = styled.a`
  display: flex;
  align-items: baseline;
`;
export const LogoTitle = styled.h1`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-left: 10px;

    font-weight: 500;
    font-size: 30px;
    line-height: 1.17;

    color: ${colors.whiteColor};
  }

  transition: color ${duration.dur250} ${timingFunction.cb1};

  &:hover {
    color: darkgrey;
  }
`;
