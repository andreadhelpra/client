import React, { Component } from "react";
import "./App.css";
import IdoList from "./IdoList";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                    <h1 className="App-title">Latest IDOs</h1>
                <IdoList/>
            </div>
        );
    }
}

export default App;
