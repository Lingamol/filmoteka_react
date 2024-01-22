import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMovies,
  // addNotices,
  // deleteNotices,
  // getNoticesById,
  // addToFavoriteNotices,
  // removeFromFavoriteNotices,
  // fetchFavoriteNotices,
} from './operations ';

const moviesInitialState = {
  moviesList: [],
  //   favoriteNoticesList: [],
  selectedMovie: null,
  page: 1,
  totalHits: 0,
  //   total_pages: 1000,
  //   total_results: 20000
  isLoadingMovies: false,
  //   isLoadingFavorite: false,
  //   isLoadingSelected: false,
  //   isLoadingDelete: false,
  //   isAdding: false,
  errorMovies: null,
  //   errorFavorite: null,
  //   errorSelected: null,
  //   category: '',
  //   search: '',
  //   limit: 20,
};

const handleFetchMoviesSuccses = (state, action) => {
  state.moviesList = action.payload.results;
  state.totalHits = action.payload.total_results;
  //   state.page = action.payload.page;
  // state.search = action.payload.search;
  //   state.limit = action.payload.limit;
  state.isLoadingMovies = false;
  state.errorMovies = null;
};
const handleFetchMoviesPending = (state, action) => {
  state.isLoadingMovies = true;
};
const handleFetchMoviesReject = (state, action) => {
  state.isLoadingMovies = false;
  state.errorNotices = action.payload;
};
/////////////////////////////////////////////////////
// const handleFetchFavoriteNoticesSuccses = (state, action) => {
//   state.favoriteMoviesList = action.payload.favoriteList;
//   state.totalHits = action.payload.totalHits;
//   state.page = action.payload.page;
//   // state.search = action.payload.search;
//   state.limit = action.payload.limit;
//   state.isLoadingFavorite = false;
//   state.errorFavorite = null;
// };
// const handleFetchFavoriteNoticesPending = (state, action) => {
//   state.isLoadingFavorite = true;
// };
// const handleFetchFavoriteNoticesReject = (state, action) => {
//   state.isLoadingFavorite = false;
//   state.errorFavorite = action.payload;
// };
// /////////////////////////////////////////////////////////////////////////
// const handleAddNoticesSuccses = (state, { payload }) => {
//   if (state.category === payload.categoryName) {
//     state.noticesList.unshift(payload);
//   }
//   if (state.category === 'own') {
//     state.noticesList.unshift(payload);
//   }
//   state.errorNotices = null;
//   state.isAdding = false;
// };

// const handleAddNoticesPending = state => {
//   state.isAdding = true;
// };

// const handleAddNoticesReject = state => {
//   state.isAdding = false;
// };
// ///////////////////////////////////////////////////////////////////////////
// const handleDeleteNoticesSuccses = (state, action) => {
//   const index = state.noticesList.findIndex(
//     notices => notices._id === action.payload._id
//   );
//   state.noticesList.splice(index, 1);
//   state.isLoadingDelete = false;
//   state.errorNotices = null;
// };
// const handleDeleteNoticesPending = (state, action) => {
//   state.isLoadingDelete = true;
// };
// const handleDeleteNoticesReject = (state, action) => {
//   state.isLoadingDelete = false;
//   state.errorNotices = action.payload;
// };
// //////////////////////////////////////////////////////////////////
// const handleGetNoticesByIdSuccses = (state, action) => {
//   state.selectedNotice = action.payload;
//   state.isLoadingSelected = false;
//   state.errorSelected = null;
// };
// const handleGetNoticesByIdPending = (state, action) => {
//   state.isLoadingSelected = true;
// };
// const handleGetNoticesByIdReject = (state, action) => {
//   state.isLoadingSelected = false;
//   state.errorSelected = action.payload;
// };
// ////////////////////////////////////////////////////////////////////
// const handleAddToFavoriteNoticesSuccses = (state, action) => {
//   if (state.category === 'favorite') {
//     state.noticesList.push(action.payload);
//   }

//   state.favoriteNoticesList.push(action.payload);
//   state.isLoadingFavorite = false;
//   state.errorFavorite = null;
// };
// const handleAddToFavoriteNoticesPending = (state, action) => {
//   state.isLoadingFavorite = true;
// };
// const handleAddToFavoriteNoticesReject = (state, action) => {
//   state.isLoadingFavorite = false;
//   state.errorFavorite = action.payload;
// };
// ///////////////////////////////////////////////////////////////////////////////
// const handleRemoveFromFavoriteNoticesSuccses = (state, action) => {
//   if (state.category === 'favorite') {
//     const index = state.noticesList.findIndex(
//       notices => notices._id === action.payload
//     );
//     state.noticesList.splice(index, 1);
//     // state.noticesList = action.payload.favoriteList;
//   }
//   const index = state.favoriteNoticesList.findIndex(
//     notices => notices._id === action.payload
//   );
//   state.favoriteNoticesList.splice(index, 1);
//   // state.favoriteNoticesList = action.payload.favoriteList;
//   state.isLoadingFavorite = false;
//   state.errorFavorite = null;
// };
// const handleRemoveFromFavoriteNoticesPending = (state, action) => {
//   state.isLoadingFavorite = true;
// };
// const handleRemoveFromFavoriteNoticesReject = (state, action) => {
//   state.isLoadingFavorite = false;
//   state.errorFavorite = action.payload;
// };
// ////////////////////////////////////////////////////////////////////////////////
export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    // setCategory(state, action) {
    //   state.category = action.payload;
    // },
    // setPage(state, action) {
    //   state.page = action.payload;
    // },
    // deletefavoriteNotice(state, action) {
    //   const index = state.noticesList.findIndex(
    //     notices => notices.id === action.payload
    //   );
    //   state.noticesList.splice(index, 1);
    // },
    // setSearch(state, action) {
    //   state.search = action.payload;
    // },
    // deleteNoticLoc(state, action) {
    //   const index = state.noticesList.findIndex(
    //     notices => notices.id === action.payload
    //   );
    //   state.noticesList.splice(index, 1);
    // },
    // setSelectedNotice(state, action) {
    //   state.selectedNotice = null;
    // },
  },

  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder

      .addCase(fetchMovies.pending, handleFetchMoviesPending)
      .addCase(fetchMovies.rejected, handleFetchMoviesReject)
      .addCase(fetchMovies.fulfilled, handleFetchMoviesSuccses);
  },
});
// export const {
//   //   setCategory,
//   //   setPage,
//   //   deletefavoriteNotice,
//   //   setSearch,
//   //   deleteNoticLoc,
//   //   setSelectedNotice,
// } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
