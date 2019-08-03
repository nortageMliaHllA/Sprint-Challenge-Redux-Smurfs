import React from 'react';
import { fetchSmurfs } from '../actions/index';
import { connect } from 'react-redux';



class List extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }
}

render() {
    if(this.props.fetchSmurfs){
        return (
            <h1>We will return to the Smurf village shortly...</h1>
        )
    }else{
        return
    }
}