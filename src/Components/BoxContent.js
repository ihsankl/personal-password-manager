import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from "styled-components";

const Cards = styled.div`
    flex: 1 1 150px;
    height: clamp(30px, 150px, 5000px);
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: .5rem;
`

const BoxContent = observer(({ store, ...props }) => {

    return (
        <div className="flex flex-wrap flex-1 my-2 gap-2">
            {store.passwords.map((item, index) => {
                return (
                    <Cards onClick={() => store.deletePassword(index)} key={index}>
                        {item?.password} <br />
                        {item?.username} <br />
                        {index}
                    </Cards>
                )
            })}
        </div>
    )
})

export default BoxContent
