import NewsReducer from "../components/NewsList/news_sliece";
import FilterReducer from "./reducers/filter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({news:NewsReducer,filter:FilterReducer});

export default rootReducer;