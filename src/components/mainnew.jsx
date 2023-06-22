import React from 'react';
import Hello from './Hello';

const name = "John";

export default function Mainnew({appname}) {
    return (
        <>
            <Hello appname ={appname} name={name} />
        </>
    )
}