// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from '../filters/selectors';
export const selectMoviesObj = state => state.movies;
export const selectMovies = state => state.movies.moviesList;
// export const selectFavoriteNotices = state => state.notices.favoriteNoticesList;

export const selectIsLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;
// export const selectCategory = state => state.movies.category;
// export const selectIsAdding = state => state.movies.isAdding;
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contactList, filterContact) => {
//     // console.log('Calculating task count. Now memoized!');
//     // console.log('contactList from selectors', contactList);
//     // console.log('filter', filterContact);
//     const normalizedFilter = filterContact.toLowerCase();

//     const visibleContacts = contactList.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return visibleContacts ? visibleContacts : [];
//   }
// );
