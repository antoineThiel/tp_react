import React from 'react';
import './App.css';
import HomePage from './components/homepage.components';
import City from './components/city.components';
import Music from './components/music.components';


const homePage = () => {
  if (window.location.pathname === '/'){
    return <HomePage/>
  }
}

const searchCity = () => {
  if (window.location.pathname === '/city'){
    return <City/>
  }
}

const music = () => {
  if (window.location.pathname === '/music'){
    return <Music/>
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {homePage()}
        {searchCity()}
        {music()}
      </header>
    </div>
  );
}

export default App;
