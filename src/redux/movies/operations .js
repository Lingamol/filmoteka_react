import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const params = {
  api_key: 'd2c21f22a2d4ccc40e22a6b0b1329764',
  per_page: 40,
};
export const fetchMovies = createAsyncThunk(
  'movies/fetchAll',
  async (_, thunkAPI) => {
    // async ({ category, search, page = 1, limit = PER_PAGE }, thunkAPI) => {
    // const params = {
    //   limit,
    //   page,
    //   search,
    // };
    try {
      // console.log('categoryaaa', category);
      const url = `https://api.themoviedb.org/3/trending/movie/day?&page=1`;
      const response = await axios.get(url, { params });

      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const addNotices = createAsyncThunk(
//   'notices/addNotices',
//   async (noticeData, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/notices', noticeData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       return data.message;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteNotices = createAsyncThunk(
//   'notices/deleteNotices',
//   async (noticeId, thunkAPI) => {
//     try {
//       // console.log('deleteNotices DELETE', noticeId);
//       const response = await axios.delete(`/notices/${noticeId}`);
//       // console.log('deleteNotices GET', response.data.message);
//       return response.data.message;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// export const getNoticesById = createAsyncThunk(
//   'notices/getNoticesById',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/notices/${noticeId}`);
//       // console.log('reresponse.data.messagesponse ', response.data.message);
//       return response.data.message;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addToFavoriteNotices = createAsyncThunk(
//   'notices/addToFavoriteNotices',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.post(`/notices/${noticeId}/favorite`);
//       // console.log('addToFavoriteNotices', response.data.message);
//       return response.data.message;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const removeFromFavoriteNotices = createAsyncThunk(
//   'notices/removeFromFavoriteNotices',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/notices/${noticeId}/favorite`);
//       return response.data.message;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const fetchFavoriteNotices = createAsyncThunk(
//   'notices/fetchFavoriteNotices',
//   async (
//     { category = '/notices/favorite', search, page = 1, limit = PER_PAGE },
//     thunkAPI
//   ) => {
//     const params = {
//       limit,
//       page,
//       search,
//     };
//     try {
//       // console.log('categoryaaa', category);
//       const response = await axios.get(category, { params });
//       return response.data;
//     } catch (e) {
//       // При ошибке запроса возвращаем промис
//       // который будет отклонен с текстом ошибки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
