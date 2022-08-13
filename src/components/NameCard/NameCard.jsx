import React from 'react';
import './NameCard.css';
const nameUrl ='https://www.namecheap.com/domains/registration/results/?domain='

export default function NameCard({suggestionName}) {
    return (
        <a className='card-link' href={`${nameUrl}${suggestionName}`}>
            <div className='result-card'>
                <p>{suggestionName}</p>
            </div>
        </a>
    )
}
