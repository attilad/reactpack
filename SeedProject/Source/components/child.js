import React from 'react';

export default class Child extends React.Component {
    render() {
        const id = this.props.params.id;
        let text = "This is a child.";

        if(id) {
            text =  "This is a child with id: " + id;
        }

        return (
            <p>{text}</p>
        );
    }
}