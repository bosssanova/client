import React from 'react';

export const SearchForm = props => (
    <div className="row">
        <div className="col-lg-12">
            <form>
                <div className="form-group">
                    <label htmlFor="product-search">
                        ค้นหา:
              </label>
                    <input type="text"
                        value={props.search}
                        onChange={props.handleInputChange}
                        className="form-control"
                        id="product-search"
                        placeholder="ค้นหาสินค้า" />
                </div>
                <button type="submit"
                    className="btn btn-primary"
                    onClick={props.handleFormSubmit}>
                    Search
            </button>
            </form>
        </div>
    </div>
);
