import React from 'react';

export default class Parent extends React.Component {
    render() {
        return (
            <div>
                <h4>This is a parent</h4>
                {this.props.children}
            </div>
        );
    }
}