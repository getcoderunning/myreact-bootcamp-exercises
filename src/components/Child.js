import React from 'react';
import GrandChild from './GrandChild';

function Child() {
    return (
        <>
            <h1>I'm the Child component</h1>
            <GrandChild />
        </>
    )
}

export default Child;