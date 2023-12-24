import { configureStore } from "@reduxjs/toolkit";
import features from "./reducers/features";

const store = configureStore({
  reducer: {
    features,
  },
});

export default store;
