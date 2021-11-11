import React from 'react'

const BoxContent = ({ ...props }) => {
    const { data } = props
    return data.map((item, index) => {
        return (
            <>
                {/* CONTENT */}
                <div key={index} className={`p-2 bg-white m-1`} style={{ flex:`1 1 150px`, height:'clamp(30px, 150px, 5000px)' }}>
                    {index}
                </div>
            </>
        )
    })
}

export default BoxContent
