import { configureStore } from "@reduxjs/toolkit";
import features from "./reducers/features";
import user from "./reducers/user";
import buildcard from "./reducers/buildcard";

const store = configureStore({
  reducer: {
    user,
    features,
    buildcard,
  },
});

export default store;
