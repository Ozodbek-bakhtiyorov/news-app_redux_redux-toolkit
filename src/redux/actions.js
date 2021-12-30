import { createAction } from "@reduxjs/toolkit";

import { newsFetching,
  newsFetched,
  newsFetchingError,
  deleteHandler} from '../components/NewsList/news_sliece'

// export const fetchNews = (request)=>(next)=>{
//   next(newsFetching());
//   request("http://localhost:3001/news")
//     .then((data) =>next(newsFetched(data)))
//     .catch((err) =>next(newsFetchingError(err)));
// }

export const delFunc = (req,id) => (next)=>{
  req(`http://localhost:3001/news/${id}`, "DELETE")
      .then(()=>next(deleteHandler(id)))
      .catch((err) => console.log(err));
}
// export const newsFetching = () => ({type:'NEWS_FETCHIG'});

// export const newsFetching=createAction('NEWS_FETCHIG')

// export const newsFetched = (news)=> ({type:'NEWS_FETCHED',payload:news});
//createAction ning qulayligi biz payload berib turmasak ham bo'ladi

// export const newsFetched = createAction('NEWS_FETCHED')
// export const newsFetchingError = createAction('NEWS_FETCHING_ERROR')
// export const newsCreated =createAction('NEWS_CREATED')
// export const bodyHandler = createAction('BODY_HANDLER')
// export const clearBody = createAction('CLEAR_BODY')
// export const deleteHandler = createAction('NEWS_DELETED')
export const filtersFetching = createAction('FILTER_FETCHING')
export const filtersFetched = createAction('FILTERS_FETCHED')
export const filterFetchingError = createAction('FILTERS_FETCHING_ERROR')
export const activeFilteredChanged = createAction('ACTIVE_FILTER_BTN')

// export const newsFetchingError = (error) =>({type:'NEWS_FETCHING_ERROR' });

// export const bodyHandler = (e)=>({type:'BODY_HANDLER', payload:e})

// export const clearBody = ()=>({type:"CLEAR_BODY"})

// export const newsCreated = (news) => ({type:'NEWS_CREATED', payload:news});

// export const deleteHandler = (id)=>({type:'NEWS_DELETED', payload:id});

// export const filtersFetching = () =>({type:'FILTER_FETCHING'})

// export const filtersFetched = (filters)=>({type:'FILTERS_FETCHED',payload:filters});

// export const filterFetchingError = (error) =>({type:'FILTERS_FETCHING_ERROR' });

// // export const activeFilteredChanged = (category) =>(dispatch) =>{
// //   setTimeout(() => {
// //     dispatch({type:'ACTIVE_FILTER_BTN',payload:category})
// //   }, 2000);
// // }
// export const activeFilteredChanged = (category) =>({type:'ACTIVE_FILTER_BTN',payload:category})

