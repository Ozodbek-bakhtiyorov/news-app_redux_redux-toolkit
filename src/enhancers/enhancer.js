//store enhancer
const enhancer = (createStore)=>(...args)=>{

  const store = createStore(...args);

  const oldDispatch = store.dispatch
  store.dispatch = (action)=>{
    if(typeof action === 'string'){
      return oldDispatch({type:action})
    }
    return oldDispatch(action)
  }
  return store;
}

export default enhancer;