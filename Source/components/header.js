import React from 'react';

export default class Header extends React.Component {
    render() {
        let message = this.props.message;
        return (<h1>{message}</h1>);
    }
}

Header.propTypes = {
    message: React.PropTypes.string.isRequired
};