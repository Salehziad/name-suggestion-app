import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

export default function ResultContainer({ suggestionName }) {
    const suggested = suggestionName.map(name => {
        return <NameCard key={name} suggestionName={name} />
    })

    return (
        <div className='result-container'>{suggested}</div>
    )
}
