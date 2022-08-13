import React from 'react';
import './SearchBox.css';

export default function SearchBox({ handleSearchInput }) {
    return (
        <div className="search-container">
            <input onChange={(e) => { handleSearchInput(e.target.value)}} placeholder='Type keywords'/>
        </div>
    )
}
