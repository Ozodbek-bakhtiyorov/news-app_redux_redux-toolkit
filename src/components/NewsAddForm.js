
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { v4 } from "uuid";


import { useHttp } from "./../hooks/useHttp";

import  {newsFetchingError,newsCreated} from './NewsList/news_sliece'

export default function NewsAddForm() {
  const { request } = useHttp();

 const [name, setname] = useState('');
 const [description, setdescription] = useState('')
 const [category, setcategory] = useState('')

  const newsLoadingStatus = useSelector(state=>state.news);
  
  const dispatch = useDispatch();


  const onSubmitHanlder = (e) => {
    const body={id:v4(),name,description,category}
    e.preventDefault();
    request("http://localhost:3001/news", "POST",JSON.stringify(body))
      .then(dispatch(newsCreated(body)))
      .catch((err) => newsFetchingError(err));
    setname('');
    setdescription('')
    setcategory('')
  };

  return (
    <div className="form">
      <form className="p-4 border shadow-lg rouned" onSubmit={onSubmitHanlder}>
        <h1>Create News</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">
            Name
          </label>
          <input
            type="text"
            required
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter news title"
            onChange={e=>setname(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-4">
            Description
          </label>
          <textarea
            type="text"
            required
            name="description"
            id="description"
            className="form-control"
            placeholder="What is your news about? ... "
            onChange={e=>setdescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-4">
            Choose Category of News
          </label>
          <select
            required
            className="form-select"
            onChange={e=>setcategory(e.target.value)}
            id="category"
            name="category"
            value={category}
          >
            <option>Default</option>
            <option value="hot" key="hot">
              Hot News
            </option>
            <option value="sport" key="sport">
              Sport News
            </option>
            <option value="edu" key="edu">
              Education News
            </option>
          </select>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary mx-2  shadow-lg ">
            Create news
          </button>
          <button
            type="reset"
            onClick={()=>{
              setname('');
              setcategory('')
              setdescription('')
            }}
            className="btn btn-success  shadow-lg "
          >
            Clear all
          </button>
        </div>
      </form>
    </div>
  );
}
