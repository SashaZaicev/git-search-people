import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import SearchContainer from "./components/SearchSection/SearchContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer className="App-header"/>
            <div className={'app-wrapper-content'}>
                <SearchContainer/>
            </div>
        </div>
    );
}

export default App;
