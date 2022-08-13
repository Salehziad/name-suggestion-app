import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './header/Header';
import ResultContainer from './ResultContainer/ResultContainer';
import SearchBox from './SearchBox/SearchBox';
const name = require('@rstacruz/startup-name-generator');
export default function App() {
  const [state, setState] = useState({ headerTitle: 'Name It!', headerExpand: true ,suggestionName:[]});
  function handleSearchInput(input) {
    setState({ ...state,headerExpand: !input,suggestionName:name(input), });
    // console.log(name(state.suggestionName))
  }
    return (
        <div>
        <Header state={state} />
        <SearchBox handleSearchInput={handleSearchInput} />
        <ResultContainer suggestionName={state.suggestionName} />
        </div>
    )
}
