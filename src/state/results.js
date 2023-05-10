import { createAction, createReducer } from "@reduxjs/toolkit";

export const setResults = createAction("SET_RESULTS");

const initialState = [];

const reducerResults = createReducer(initialState, {
  [setResults]: (state, action) => action.payload
});

export default reducerResults;