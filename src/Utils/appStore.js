import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    // add other reducers here
    movies: movieReducer,
    gpt: gptReducer,                                                 
  },
});


export default appStore;
