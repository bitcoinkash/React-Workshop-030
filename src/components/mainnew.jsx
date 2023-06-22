import React from 'react';
import Hello from './Hello';

const name = "John";

export default function Mainnew() {
    return (
        <>
            <Hello prop={name} />
        </>
    )
}