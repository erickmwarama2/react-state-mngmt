import React, { Component } from "react";
import MyList from "./MyList";

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['Moja','Mbili','Tatu','Nne','Tano'])
        }, 4000);
    });
}

export default class MyContainer extends Component {
    state = {items: []};

    componentDidMount() {
        fetchData().then(items => this.setState({items}));
    }

    render() {
        return <MyList {...this.state} />
    }
}