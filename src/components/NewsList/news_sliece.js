import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from './../../hooks/useHttp';
const initialState = {
  news: [],
  newsLoadingStatus: "bek",
};
// const newsAdapter = createEntityAdapter();
// const initialState = newsAdapter.getInitialState({
//   newsLoadingStatus: "bek",
// })



export const delFunc = createAsyncThunk(

  'NewsReducer/newsDeleted',
  async(id,{fulfillWithValue})=>{
    const {request} = useHttp();
    return await request(`http://localhost:3001/news/${id}`,'DELETE')
  }

)

export const fetchNews = createAsyncThunk(

  'NewsReducer/fetchNews',
  async()=>{
    const {request} = useHttp();
    return await request('http://localhost:3001/news')
  }

)

const NewsReducer = createSlice({
  name: "NewsReducer",
  initialState,
  reducers: {
      // newsFetching: (state) => {state.newsLoadingStatus = "loading"},
      // newsFetched: (state, action) => {
      //   state.news = action.payload;
      //   state.newsLoadingStatus = "bek";
      // },
      // newsFetchingError: (state) => {state.newsLoadingStatus = "error"},
    newsCreated: (state, action) => {console.log(state.news); state.news.push(action.payload);},
    deleteHandler: (state, action) =>
      {state.news = state.news.filter((el) => el.id !== action.payload)},
  },
  extraReducers: (builder) =>{
    builder
      .addCase(fetchNews.pending, state=>{state.newsLoadingStatus = 'loading'})
      .addCase(fetchNews.fulfilled,(state, action) => {
        // state.news = action.payload;
        state.news = action.payload;
        state.newsLoadingStatus = "bek";
      })
      .addCase(fetchNews.rejected,(state)=>{state.newsLoadingStatus = 'error'})
      .addCase(delFunc.pending,state=>{state.newsLoadingStatus = 'loading'})
      .addCase(delFunc.fulfilled,(state,action)=>{console.log(action.payload,'deleted');state.news = state.news.filter((el) => el.id !== action.payload)})
      .addDefaultCase(()=>{})
  }
});


const { actions, reducer } = NewsReducer;

// export const {selectAll} = newsAdapter.getSelectors(state=>state.NewsReducer)


export default reducer;

export const {
  newsFetching,
  newsFetched,
  newsFetchingError,
  newsCreated,
  deleteHandler,
} = actions;
