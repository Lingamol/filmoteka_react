import styled from '@emotion/styled';
import HeaderBgDesktop2x from '../../images/header-in-desktop-2x.jpg';
import HeaderBgDesktop from '../../images/header-in-desktop.jpg';
import HeaderBgTablet2x from '../../images/header-in-tablet-2x.jpg';
import HeaderBgTablet from '../../images/header-in-tablet.jpg';
import HeaderBgMobile2x from '../../images/header-in-mobile-2x.jpg';
import HeaderBgMobile from '../../images/header-in-mobile.jpg';

export const Overlay = styled.div`
  /* width: 100%;
  height: auto;
  background: red; */
  padding-top: 40px;
  padding-bottom: 44px;

  background: rgba(0, 0, 0, 0.56);
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.56),
      rgba(0, 0, 0, 0.56)
    ),
    url(${HeaderBgMobile});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  flex-grow: 1;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.56),
        rgba(0, 0, 0, 0.56)
      ),
      url(${HeaderBgMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.56),
        rgba(0, 0, 0, 0.56)
      ),
      url(${HeaderBgTablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.56),
          rgba(0, 0, 0, 0.56)
        ),
        url(${HeaderBgTablet2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.56),
        rgba(0, 0, 0, 0.56)
      ),
      url(${HeaderBgDesktop});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.56),
          rgba(0, 0, 0, 0.56)
        ),
        url(${HeaderBgDesktop2x});
    }
  }
`;
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 54px;

  @media screen and (min-width: 768px) {
    margin-bottom: 41px;
  }
`;
