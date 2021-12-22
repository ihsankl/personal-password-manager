import React, { useState, createContext } from 'react'
import BoxContent from './Components/BoxContent';
import Header from './Components/Header';
import PlusSign from './Components/PlusSign';
import ScreenOverlay from './Components/ScreenOverlay';
import Sidebar from './Components/Sidebar';
import Loading from './Components/Loading';
import Store from './Store';

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [myval, setMyval] = useState("")

  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return (
    <>
      {/* HEADER SECTION */}
      <Store.Provider value={myval}>

        <Header setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

        {/* CONTAINER */}
        <div className="pt-16 pr-4 pl-4">

          {/* BODY SECTION */}
          <BoxContent data={data} />
        </div>

        {/* PLUS SIGN */}
        <PlusSign onClick={e => setMyval(Math.random())} />

        {/* SIDEBAR */}
        <Sidebar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

        {/* LOADING */}
        <Loading isLoading={isLoading} />
      </Store.Provider>
    </>
  )
}

export default App
