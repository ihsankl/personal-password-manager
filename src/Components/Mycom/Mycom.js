import React, { useContext } from 'react'
import Store from '../../Store'

const Mycom = () => {
    const context = useContext(Store)
    return (
        <div>
            {`${context} comes from mycom.js`}
        </div>
    )
}

export default Mycom
