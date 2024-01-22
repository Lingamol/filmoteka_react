import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const params = {
  api_key: 'd2c21f22a2d4ccc40e22a6b0b1329764',
  //   per_page: 40,
};

export const fetchGenres = createAsyncThunk(
  'config/fetchGenres',
  async (_, thunkAPI) => {
    try {
      console.log('fetchGenres');
      const url = `https://api.themoviedb.org/3/genre/movie/list?&language=en-US`;
      const response = await axios.get(url, { params });
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchConfig = createAsyncThunk(
  'config/fetchConfig',
  async (_, thunkAPI) => {
    try {
      console.log('fetchConfig');
      const url = `https://api.themoviedb.org/3/configuration?`;
      const response = await axios.get(url, { params });
      console.log('config responce', response.data);
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
