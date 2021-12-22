import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import Mycom from './Mycom/Mycom'

const Mytest = ({ ...props }) => {
    const { children } = props
    return (
        <span>
            {children} <br />
            aaaaaaa
        </span>
    )
}


// PLUS SIGN
const PlusSign = ({ onClick, ...props }) => {
    return (
        <>
            <button onClick={onClick} className="fixed bottom-5 right-5 w-16 h-16 bg-blue-300 z-10 rounded-full justify-center items-center flex">
                <AiOutlinePlusCircle className="text-white text-5xl" />
            </button>
            <Mytest>
                <Mycom />
            </Mytest>
        </>
    )
}

export default PlusSign
