import Logo from 'components/Logo';
import Container from '../Container';
import { HeaderNav, Overlay } from './Header.styled';
import HeaderNavList from 'components/HeaderNavList';
import SearchForm from 'components/SearchForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchConfig, fetchGenres } from '../../redux/config/operations';
const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
    dispatch(fetchGenres());
  }, [dispatch]);

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
