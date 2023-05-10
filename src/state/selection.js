import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSelection = createAction("SET_SELECTION");

const initialState = {};

const reducerSelection = createReducer(initialState, {
  [setSelection]: (state, action) => action.payload
});

export default reducerSelection;