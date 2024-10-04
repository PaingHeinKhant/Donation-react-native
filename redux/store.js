import { combineReducers, configureStore } from "@reduxjs/toolkit";
import User from "./reducers/User";
import Categories from "./reducers/Categories";
import Donations from "./reducers/Donations";
import { userApi } from '../api/userSlice.js';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});


export default store;
