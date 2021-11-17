import React from 'react'
import { AiOutlineSetting, AiFillCaretLeft, AiOutlineLock, AiFillFile } from "react-icons/ai";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring'

const Sidebar = ({ setIsSideBarOpen, isSideBarOpen, ...props }) => {
    const opacity = useSpring({
        opacity: isSideBarOpen ? 1 : 0,
    })

    const SpacerWithLine = styled.div`
        margin: .5rem 0;
        border-top: 1px solid grey;
        width: 100%;
    `

    return (
        <animated.div style={opacity} className={`fixed bg-black top-0 bottom-0 bg-opacity-20 right-0 left-0 z-20`}>
            <div className={`bg-white w-3/4 h-full p-4 `}>
                <div className="flex flex-col content-center w-full">
                    <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="flex p-1">
                        <AiFillCaretLeft className="text-3xl " />
                        <span className="ml-5">Back</span>
                    </button>
                    <SpacerWithLine />
                    <button className="flex p-1">
                        <AiOutlineSetting className="text-3xl " />
                        <span className="ml-5">Generate Password</span>
                    </button>
                    <SpacerWithLine />
                    <button className="flex p-1">
                        <AiOutlineLock className="text-3xl " />
                        <span className="ml-5">My Passwords</span>
                    </button>
                    <SpacerWithLine />
                    <button className="flex p-1">
                        <AiFillFile className="text-3xl " />
                        <span className="ml-5">Notes</span>
                    </button>
                </div>
            </div>
        </animated.div>
    )
}

export default Sidebar
