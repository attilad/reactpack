import React from 'react';
import message from '../data/content';
import './app.scss';

export default class App extends React.Component {
    render(){
        return (
            <h1>{message}</h1>
        );
    }
}
