import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducerUser from "./user";
import reducerResults from "./results";
import reducerSelection from "./selection";
import reducerLocalFavorites from "./favorites";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: { user: reducerUser, results: reducerResults, selection: reducerSelection, localFavorites: reducerLocalFavorites },
});

export default store;
