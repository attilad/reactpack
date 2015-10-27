import React from 'react';
import { connect } from 'react-redux';

import { invalidateValues, fetchValuesIfNeeded } from '../actions/values';

import './values.scss';

import { Link } from 'react-router';

class Values extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchValuesIfNeeded());
    }

    handleRefreshClick(e){
        e.preventDefault();

        const { dispatch } = this.props;

        dispatch(invalidateValues());
        dispatch(fetchValuesIfNeeded());
    }

    render(){
        const { isFetching, values, dispatch } = this.props;

        return (
            <div>
              <h1>A list of values { isFetching ? <span>Fetching...</span> : null }</h1>
              <ul>
                { values.map(i => {
                    return <li key={i.id}>{i.value}</li>;
                }) }
              </ul>
              <p><button onClick={this.handleRefreshClick.bind(this)}>Load Values</button></p>
              <p><Link to='/'>Home</Link></p>
            </div>
        );
    }
}

Values.propTypes = {
    values: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired
};

function select(state) {
    return {
        values: state.values.items,
        isFetching: state.values.isFetching
    };
}

export default connect(select)(Values);