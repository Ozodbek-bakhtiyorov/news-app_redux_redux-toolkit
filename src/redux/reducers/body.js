
import { createReducer } from "@reduxjs/toolkit";
import { bodyHandler, clearBody, newsFetching } from "../actions";
import { v4 } from "uuid";
const initialState = {
  body: {
    id: "",
    name: "",
    description: "",
    category: "",
  }
};

// const BodyReducer =
//   (initialState,
//   {
//     [newsFetching]: (state, action) => {
//       state.body = { id: v4(), [action.payload.target.name]: action.payload.target.value };
//     },
//     [clearBody]: (state) =>
//       (state.body = { name: "", description: "", category: "" }),
//   },
//   [],
//   (state) => state);
const BodyReducer = (state=initialState,{type,payload}) =>{

  switch(type){
    case "BODY_HANDLER":
      console.log(payload.target.value);
       return{
         ...state,
         body:{
           ...state.body,
           id:v4(),
           [payload.target.name]:payload.target.value
         }
       }
    case 'CLEAR_BODY':
        return{
          ...state,
          body:{
            name:'',
            description:'',
            category:''
          }
        }
    default:
      return state;
  }
}

