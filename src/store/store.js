import { configureStore } from "@reduxjs/toolkit";
import features from "./reducers/features";
import user from "./reducers/user";

const store = configureStore({
  reducer: {
    user,
    features,
  },
});

export default store;
