import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; // Ensure correct path

const store = configureStore({
  reducer: {
    auth: authReducer, // Make sure reducer key matches state access
  },
});

export default store;
