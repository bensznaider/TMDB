import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLocalFavorites = createAction("SET_LOCAL_FAVORITES");

const initialState = [];

const reducerLocalFavorites = createReducer(initialState, {
  [setLocalFavorites]: (state, action) => action.payload
});

export default reducerLocalFavorites;