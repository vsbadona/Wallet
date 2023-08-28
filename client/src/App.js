import './App.css';
import Home from './Container/Home';
import Header from './Container/Header';
import History from './Container/History';
import Login from './Container/Login';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const login = useSelector(state => state.login)
  const renderPages = () => {
    switch (login) {
      case true:
        return(
          <>
          <Home/>
          <History/>
          </>
        )
        case false : 
    return(
      <>
      <Login/>
      </>
    )
    
      default:
        break;
    }
  }
  useEffect(()=>{renderPages()},[login])
  return (
    <div className=" w-full lg:w-2/3 mx-auto h-2/3 border-2">
    <Header/>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    {renderPages()}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    </div>
  );
}

export default App;
