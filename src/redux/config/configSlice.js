import { createSlice } from '@reduxjs/toolkit';
import { fetchConfig, fetchGenres } from './operations';

const configInitalState = {
  base_url: null,
  genresList: [],
  isLoadingConfig: false,
  isLoadingGenres: false,
  errorGenres: null,
  errorConfig: null,
};

const handleFetchConfigSuccses = (state, action) => {
  state.base_url = action.payload.images.secure_base_url;
  state.isLoadingConfig = false;
  state.errorConfig = null;
};
const handleFetchConfigPending = (state, action) => {
  state.isLoadingConfig = true;
};
const handleFetchConfigReject = (state, action) => {
  state.isLoadingConfig = false;
  state.errorConfig = action.payload;
};

const handleFetchGenresSuccses = (state, action) => {
  state.genresList = action.payload.genres;
  state.isLoadingGenres = false;
  state.errorGenres = null;
};
const handleFetchGenresPending = (state, action) => {
  state.isLoadingGenres = true;
};
const handleFetchGenresReject = (state, action) => {
  state.isLoadingGenres = false;
  state.errorGenres = action.payload;
};

export const configSlice = createSlice({
  name: 'config',
  initialState: configInitalState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchConfig.pending, handleFetchConfigPending)
      .addCase(fetchConfig.rejected, handleFetchConfigReject)
      .addCase(fetchConfig.fulfilled, handleFetchConfigSuccses)
      .addCase(fetchGenres.pending, handleFetchGenresPending)
      .addCase(fetchGenres.rejected, handleFetchGenresReject)
      .addCase(fetchGenres.fulfilled, handleFetchGenresSuccses);
  },
});

// export const {} = configSlice.actions;
export const configReducer = configSlice.reducer;
