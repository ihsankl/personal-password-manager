import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

// PLUS SIGN
const PlusSign = ({ onClick, ...props }) => {
    return (
        <button onClick={onClick} className="fixed bottom-5 right-5 w-16 h-16 bg-blue-300 z-10 rounded-full justify-center items-center flex">
            <AiOutlinePlusCircle className="text-white text-5xl" />
        </button>

    )
}

export default PlusSign
