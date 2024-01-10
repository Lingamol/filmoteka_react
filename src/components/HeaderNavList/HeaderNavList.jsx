import { HeaderList, ListItem, ListLink } from './HeaderNavList.styled';

const HeaderNavList = () => {
  return (
    <HeaderList>
      <ListItem>
        <ListLink
          className="active header-list__item header-list__link--current"
          // data-page="home"
          href="/src/index.html"
        >
          Home
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink
          class="header-list__link"
          // data-page="library"
          href="/src/library.html"
        >
          My Library
        </ListLink>
      </ListItem>
    </HeaderList>
  );
};
export default HeaderNavList;
