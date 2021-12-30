import { useHttp } from "../../hooks/useHttp";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import Spinner from "../Spinner";

import * as actions from "../../redux/actions";


import NotFound from "../NotFound";

import NewsListItem from "../NewsListItem";

import {fetchNews,delFunc } from "./news_sliece";

import { useCallback } from "react";

import {createSelector} from 'reselect'

import { TransitionGroup,CSSTransition  } from "react-transition-group";
export default function NewsList() {
  const filteredNewsSelected = createSelector(
    state=>state.filter.activeFilter,
    state=>state.news.news,
    (activeFilter,news)=>{
      if(activeFilter === 'all') {
        console.log(news) 
        return news;
      }
      else return news.filter(el=>el.category === activeFilter)
    }
  )
  const filterLoadingStatus = useSelector(state=>state.filter.filterLoadingStatus);

const filteredNews = useSelector(filteredNewsSelected);
  console.log(filteredNews)
  const dispatch = useDispatch();

  // const { delFunc} =
  //   bindActionCreators(actions, dispatch);


  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchNews())// bu bizga ancha qisqaroq kod yozishimizga imkon beradi;
  }, []);

  const onDelete =(id) => {
    dispatch(delFunc(id))///optimal usul
    dispatch(fetchNews())
  }

  if (filterLoadingStatus === "loading") return <Spinner />;
  else if (filterLoadingStatus === "error") return <NotFound />;
  const renderNewsList = (arr) => {
    if (arr.length === 0) return <CSSTransition timeout={0} className="item"><h4>News Doesn't exist </h4></CSSTransition>;
    return arr
      .map(({ id, ...props }) => (
       <CSSTransition className="item" key={id} timeout={500}>
            <NewsListItem 
          key={id} t
          id={id}
          {...props}
          clickHanler={() => onDelete(id)}
          className="show"
        /> 
       </CSSTransition>
      ))
      .reverse();
  };

  const element = renderNewsList(filteredNews);

  return (
    <TransitionGroup component="ul">
          {element}
    </TransitionGroup>
  );
}
