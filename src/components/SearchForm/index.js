import React from 'react';

const SearchForm = (onSubmit, onChange, value) => {
  return (
    <section className="container">
        <form onSubmit={onSubmit}>
            <div className="form-row">
                <div className="col-md-11">
                    <input type="text" className="form-control" value={value} onChange={onChange}/>
                </div>
                <div className="col-md-1">
                    <input className="btn btn-primary" type="submit" value="Search"/>
                </div>
            </div>
        </form>
    </section>
  );
}

export default SearchForm;