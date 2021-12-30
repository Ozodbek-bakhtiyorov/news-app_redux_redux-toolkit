const initialState = {
  filters:[],
  filterLoadingStatus:'bek',
  activeFilter:"all"
}

const FilterReducer = (state=initialState,{type,payload}) =>{

  switch(type){
    case 'FILTER_FETCHING':
      return{
        ...state,
        filterLoadingStatus:'loading'
      }  
    case 'FILTERS_FETCHED':
      return{
        ...state,
        filters:payload, 
        filterLoadingStatus:'bek'
      }
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        filterLoadingStatus:'error'
      }
      case 'ACTIVE_FILTER_BTN':
        return{
        ...state,
        activeFilter:payload
      }      
    default:
      return state;
  }
}

export default FilterReducer;