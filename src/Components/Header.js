import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

// HEADER SECTION
const Header = ({ setIsSideBarOpen, isSideBarOpen, ...props }) => {

    return (
        <div className="flex items-center flex-row fixed flex-wrap z-10 bg-blue-100 w-full px-4 py-4">
            <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="mr-5 p-1">
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
    )
}

export default Header
