import React from 'react'
import Data from '../Data'


export default function Hello({prop}) {

    const myProperty = Data().name;



    return (
        <>

        <h1>Hello {prop} {myProperty}</h1>
        </>
    )
}
