
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from '.';

import stringMiddleware from "../middleware/stringMiddleware";

import enhancer from "../enhancers/enhancer";

export const store = configureStore({
  reducer:rootReducer,
  // middleware:[ReduxThunk,stringMiddleware],
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(stringMiddleware),
  devtools: process.env.NODE_ENV !== "production",
  enhancers:[enhancer]

})


//configuratsiyadan oldingi 
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(ReduxThunk,stringMiddleware));