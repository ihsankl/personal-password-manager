import React from 'react'
import { AiOutlineSetting, AiFillCaretLeft, AiOutlineLock, AiFillFile } from "react-icons/ai";
import { useSpring, animated } from 'react-spring'
import ScreenOverlay from './ScreenOverlay';
import { SpacerWithLine } from '../Layout';

const Sidebar = ({ setIsSideBarOpen, isSideBarOpen, ...props }) => {

    const translate = useSpring({
        transform: isSideBarOpen ? 'translateX(0%)' : 'translateX(-100%)',
    })

    return (
        <ScreenOverlay setIsActive={setIsSideBarOpen} isActive={isSideBarOpen}>
            <animated.div style={translate} className="bg-white w-3/4 h-full p-4 fixed top-0 bottom-0 right-0 left-0 z-30">
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
            </animated.div>
        </ScreenOverlay>
    )
}

export default Sidebar
