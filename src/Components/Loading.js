import React from 'react'
import ScreenOverlay from './ScreenOverlay'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({ isLoading, ...props }) => {

    return (
        <ScreenOverlay isActive={isLoading}>
            <div className={`flex flex-col justify-center items-center w-40 h-40 bg-white rounded ${!isLoading && 'hidden'}`}>
                <span className="text-2xl">please wait...</span>
                <AiOutlineLoading3Quarters className="text-3xl mt-2 animate-spin" />
            </div>
        </ScreenOverlay>
    )
}

export default Loading
