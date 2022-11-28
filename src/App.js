import React, { Component } from "react";
import "./App.css";
import IdoList from "./IdoList";
import eth_sphere from "./images/eth_sphere.png"
import btc_sphere from "./images/btc_sphere.png"

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        <style>@import url('https://fonts.cdnfonts.com/css/lemonmilk');</style>                

        return (
            <div className="App">
                <div className="App-heading">
                    <img src={eth_sphere} class="sphere"/>
                    <h1 className="App-title">Latest IDOs</h1>
                    <img src={btc_sphere} class="sphere"/>
                </div> 
                <IdoList/>
            </div>
        );
    }
}

export default App;
