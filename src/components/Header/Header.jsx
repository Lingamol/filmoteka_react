import Logo from 'components/Logo';
import Container from '../Container';
import { HeaderNav, Overlay } from './Header.styled';
import HeaderNavList from 'components/HeaderNavList';

const Header = () => {
  return (
    <Overlay>
      <Container>
        <HeaderNav>
          <Logo />
          <HeaderNavList />
        </HeaderNav>
      </Container>
    </Overlay>
  );
};
export default Header;
