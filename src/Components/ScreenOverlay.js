import React from 'react'
import { useSpring, animated } from 'react-spring'


const ScreenOverlay = ({ setIsActive, isActive, ...props }) => {

    const zoomOutAnim = useSpring({
        top: isActive ? '0%' : '100%',
        bottom: isActive ? '0%' : '100%',
        right: isActive ? '0%' : '100%',
        left: isActive ? '0%' : '100%',

    })

    return (
        <animated.div style={zoomOutAnim} className={`fixed bg-black bg-opacity-20 flex justify-center items-center z-20`}>
            {props.children}
        </animated.div>
    )
}

export default ScreenOverlay
