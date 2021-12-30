import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import rootReducer from "./redux";

/////PASTDAGI STORENI ALOHIDA FILE GA OLDIK/////

// //applyMiiddleware // middleware next= bu dispatch
// const stringMiddleware = (store)=>(next)=>(action)=>{
//   if(typeof action === 'string'){
//     return next({type:action});
//   }
//   return next(action);
// }

// //store enhancer
// const enhancer = (createStore)=>(...args)=>{

//   const store = createStore(...args);

//   const oldDispatch = store.dispatch
//   store.dispatch = (action)=>{
//     if(typeof action === 'string'){
//       return oldDispatch({type:action})
//     }
//     return oldDispatch(action)
//   }
//   return store;
// }


// // const store = createStore(rootReducer,enhancer )  usulda devtools ishlamay qoladi va biz buni oldini quyidagicha olishimiz mumkin: 1-compose  func ni redux dan import qilamiz:


// const store = createStore(
//   rootReducer,
//   applyMiddleware(ReduxThunk,stringMiddleware)
//   // compose(enhancer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   )// bu holadda bizgda devtools ham ishlaydi 
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
