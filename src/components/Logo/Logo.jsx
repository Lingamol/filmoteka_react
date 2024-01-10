import { HeaderLogo, LogoLink, LogoTitle } from './Logo.styled';
// import { ReactComponent as LogoIcon } from '../../../img/icons/close_menu.svg';
import { IconSvg } from 'components/IconSvg/IconSvg';
const Logo = () => {
  return (
    <HeaderLogo>
      <LogoLink href="/src/index.html">
        <IconSvg name="film" size="24" />
        {/* <svg class="header-logo__icon" width="24" height="24">
          <use href="/src/images/icons.svg#film"></use>
        </svg> */}
        <LogoTitle>Filmoteka</LogoTitle>
      </LogoLink>
    </HeaderLogo>
  );
};
export default Logo;
