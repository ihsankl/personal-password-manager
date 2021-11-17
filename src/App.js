import React, { useState } from 'react'
import BoxContent from './Components/BoxContent';
import Header from './Components/Header';
import PlusSign from './Components/PlusSign';
import Sidebar from './Components/Sidebar';

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return (
    <>
      {/* HEADER SECTION */}
      <Header setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

      {/* CONTAINER */}
      <div className="pt-16 pr-4 pl-4">

        {/* BODY SECTION */}
        <BoxContent data={data} />
      </div>

      {/* PLUS SIGN */}
      <PlusSign />

      {/* SIDEBAR */}
      <Sidebar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

    </>
  )
}

export default App
