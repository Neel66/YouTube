import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken, saveToken, removeToken } from '../../utils/authStorage';

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  const token = await getToken();
  return token;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { userToken: null, loading: true },
  reducers: {
    login: (state, action) => {
      state.userToken = action.payload;
      saveToken(action.payload);
    },
    logout: (state) => {
      state.userToken = null;
      removeToken();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.userToken = action.payload;
      state.loading = false;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
