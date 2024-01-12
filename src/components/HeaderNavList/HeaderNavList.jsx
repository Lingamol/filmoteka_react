import {
  HeaderList,
  // ListItem,
  // ListLink,
  StyledLink,
} from './HeaderNavList.styled';

const HeaderNavList = () => {
  return (
    // <HeaderList>
    //   <ListItem>
    //     <ListLink
    //       className="active header-list__item header-list__link--current"
    //       // data-page="home"
    //       href="/src/index.html"
    //     >
    //       Home
    //     </ListLink>
    //   </ListItem>
    //   <ListItem>
    //     <ListLink
    //       class="header-list__link"
    //       // data-page="library"
    //       href="/src/library.html"
    //     >
    //       My Library
    //     </ListLink>
    //   </ListItem>
    // </HeaderList>
    <HeaderList>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/library">My Library</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </HeaderList>
  );
};
export default HeaderNavList;
