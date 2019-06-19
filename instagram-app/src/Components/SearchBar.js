import React from 'react';
import "../../node_modules/font-awesome/css/font-awesome.min.css"

import './searchBar.css'

function SearchBar (props) {
    return (
        <div className="header">
            <div className='instagramHeader'>
                <i className='fa fa-instagram fa-3x'></i>
                <h3>Instagram</h3>
            </div>
            <input type='text' placeholder='Search' name='search' />
            <div className='logosHeader'>
                <i className='fa fa-compass fa-lg'></i>
                <i className='fa fa-heart fa-lg'></i>
                <i className='fa fa-user fa-lg'></i>
            </div>
        </div>
    )
}

export default SearchBar;