import React from 'react';
import './style.css';

const SearchForm = ({onChange, value, actionButtonOne, actionButtonTwo}) => {
  return (
    <section className="container">
        <div className="form-row">
            <div className="col-md-10">
            <input type="text" className="form-control" value="Rick" onChange={onChange}/>
            </div>
            <div className="col-md-1">
                <button className="btn btn-primary" onClick={actionButtonOne} type="button">Search</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-primary" onClick={actionButtonTwo} type="button">Clear</button>
            </div>
        </div>
    </section>
  );
}

export default SearchForm;