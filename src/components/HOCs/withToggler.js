// HOC is a function that takes a component as a parameter
// and return a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities
import React, {Component} from 'react';

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }

    toggle = () => {
        this.setState(prevSate => {
            return {
                on: !prevSate.on
            }
        })
    }

    render() {
        const Component = this.props.component;
        return (
            <Component on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }

}

export default Toggler

