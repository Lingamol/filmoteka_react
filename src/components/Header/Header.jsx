import Logo from 'components/Logo';
import Container from '../Container';
import { HeaderNav, Overlay } from './Header.styled';
import HeaderNavList from 'components/HeaderNavList';
import SearchForm from 'components/SearchForm';

const Header = () => {
  return (
    <Overlay>
      <Container>
        <HeaderNav>
          <Logo />
          <HeaderNavList />
        </HeaderNav>
        <SearchForm />
      </Container>
    </Overlay>
  );
};
export default Header;
