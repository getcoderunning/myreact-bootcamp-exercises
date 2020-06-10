// Higher-Ored Components - A function that takes a component as its first argument 
// and returns a new component that wraps the given component, 
// providing extra capabilities to it.
import React from 'react';

export function withExtraPropAdded(component) {
    const Component = component;
    return function(props) {
        return (
            <Component anotherProp="props props props" {...props} />
        )
    }
}
