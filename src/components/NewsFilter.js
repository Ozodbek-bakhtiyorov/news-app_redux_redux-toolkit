import React from "react";

import { useEffect, uses } from "react";

import classNames from "classnames";

import { useHttp } from "./../hooks/useHttp";
import * as actions from "./../redux/actions";

import Spinner from "./Spinner";

import { bindActionCreators } from "redux";

import { useSelector, useDispach, useDispatch } from "react-redux";
import NotFound from "./NotFound";

export default function NewsFilter() {
  const { filters, filterLoadingStatus, activeFilter} =
    useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const { request } = useHttp();

  const { filtersFetched, filtersFetching, filterFetchingError, activeFilteredChanged  } =
    bindActionCreators(actions, dispatch);

  useEffect(() => {
    filtersFetching();
    request("http://localhost:3001/filters")
      .then((data) => filtersFetched(data))
      .catch((err) => filterFetchingError(err));
  }, []);

  if (filterLoadingStatus === "loading") <Spinner />;
  else if (filterLoadingStatus === "error") <NotFound />;

  const renderFilters = (arr) => {
    if (arr.length === 0) return <h5>Filters doesn't found </h5>;

    return arr.map(({ name, className, label },i) => {
      const btnClasses = classNames("btn", className, {
        'active': name === activeFilter,
      }); 
        
      return (
        <button
          key={i}
          id={name}
          className={btnClasses}
          onClick={() => activeFilteredChanged(name)}
        >
          {label}
        </button>
      );
    });
  };

  const elements=renderFilters(filters)

  return (
    <div className="form mt-4">
      <div className="p-4 shadow-lg rouned">
        <div className="mb-3">
          <h4>Filter by category</h4>
          <div className="btn-group">
            {elements}
          </div>
        </div>
      </div>
    </div>
  );
}
