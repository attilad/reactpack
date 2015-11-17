import React from 'react';
import { connect } from 'react-redux';

import {increment, decrement} from '../actions/counter';

import { Link } from 'react-router';
import text from '../data/content';
import Header from '../components/header';
import Counter from '../components/counter.js';
import './app.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.props.dispatch(increment());
    }

    handleDecrement() {
        this.props.dispatch(decrement());
    }

    render(){
        const { counter, dispatch } = this.props;

        return (
            <div>
                <Header message={text} />
                <Counter count={counter}
                         onUp={this.handleIncrement}
                         onDown={this.handleDecrement}
                    />
                {this.props.children}
                <p><Link to='/values'>Values</Link></p>
            </div>
        );
    }
}

App.propTypes = {
    counter: React.PropTypes.number.isRequired
};

function select(state) {
    return {
        counter: state.counter
    };
}

export default connect(select)(App);