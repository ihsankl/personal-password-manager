import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlinePlusCircle } from "react-icons/ai";
import BoxContent from './Components/BoxContent';
const App = () => {
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return (
    <>
      {/* HEADER SECTION */}
      <div className="flex items-center flex-row fixed flex-wrap z-10 bg-blue-100 px-4 py-4">
        <button className="mr-5 p-1">
          <AiOutlineMenu className="text-3xl" />
        </button>
        {/* SEARCH BAR */}
        <div className="relative flex-1">
          <input type="search" name="" className="w-full rounded-md pl-8 p-1" id="" placeholder="Search . . ." />
          <AiOutlineSearch className="text-2xl absolute top-1.5 left-1" />
        </div>
        {/* PROFILE IMAGE */}
        <button className="flex justify-center items-center rounded-full bg-blue-300 w-8 h-8 ml-5 p-1">
          <AiOutlineUser className="text-white text-xl" />
        </button>

      </div>
      <div className="pt-16 pr-4 pl-4">

        {/* BODY SECTION */}
        <div className="flex flex-wrap flex-1 mt-1" style={{ gap: '15px' }}>
          <BoxContent data={data} />
        </div>

        {/* PLUS SIGN */}
        <button className="fixed bottom-5 right-5 w-16 h-16 bg-blue-300 z-10 rounded-full justify-center items-center flex">
          <AiOutlinePlusCircle className="text-white text-5xl" />
        </button>
      </div>
    </>
  )
}

export default App
