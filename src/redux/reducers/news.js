import { createReducer } from "@reduxjs/toolkit";

import {
  newsFetched,
  newsFetching,
  newsFetchingError,
  newsCreated,
  deleteHandler,
} from "../actions";

const initialState = {
  news: [],
  newsLoadingStatus: "bek",
};
// add case ichida return qilmaslik kerak
const NewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newsFetching, (state) => {
      state.newsLoadingStatus = "loading";
    })
    .addCase(newsFetched, (state, action) => {
      state.newsLoadingStatus = "bek";
      state.news = action.payload;
    })
    .addCase(newsFetchingError, (state) => {
      state.newsLoadingStatus = "error";
    })
    .addCase(newsCreated, (state, action) => {
      state.news.push(action.payload);
    })
    .addCase(deleteHandler, (state, action) => {
      state.news = state.news.filter((el) => el.id !== action.payload);
    })
    .addDefaultCase(() => {});
});

// const NewsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "NEWS_FETCHIG":
//       return {
//         ...state,
//         newsLoadingStatus: "loading",
//       };
//     case "NEWS_FETCHED":
//       return {
//         ...state,
//         newsLoadingStatus: "bek",
//         news: payload,
//       };
//     case "NEWS_FETCHING_ERROR":
//       return {
//         ...state,
//         newsLoadingStatus: "error",
//       };
//     case "NEWS_CREATED":
//       console.log("submited");
//       console.log(payload);
//       return {
//         ...state,
//         news: [...state.news, payload],
//       };
//     case "NEWS_DELETED":
//       return {
//         ...state,
//         news: state.news.filter((el) => el.id !== payload),
//       };
//     default:
//       return state;
//   }
// };

export default NewsReducer;
