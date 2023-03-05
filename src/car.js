import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"Ford",
            color:"Red",
            model:"Mustang",
            year:2012
    }
    }
    changeColor=()=>{
        this.setState({color:"yellow"});//use seState to change the state object
    }
    render(){
        return(

            <div>
                <h3>Description of {this.state.model} car</h3>
            <p>Me the {this.state.color} car  is brand {this.state.brand} model of {this.state.model}I live in Garage since {this.state.year}</p>
            <button type="button" onClick={this.changeColor}> changeColor</button>
        </div>
        )
    }
}
export default Car;