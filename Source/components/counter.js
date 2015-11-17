import React from 'react';
import './counter.scss';

export default class Counter extends React.Component {
    render() {
        let { count, onUp, onDown } = this.props;
        return (
            <div id="counter">
                <h3>Counter: {count}</h3>
                <button onClick={e => {
                    e.preventDefault();
                    onUp();
                }}>
                    +
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    onDown();
                }}>
                    -
                </button>
            </div>
        );
    }
}

Counter.propTypes = {
    count: React.PropTypes.number.isRequired,
    onUp: React.PropTypes.function,
    onDown: React.PropTypes.function
};