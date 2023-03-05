import React from "react";

class Update extends React.Component{
    constructor(props){
        super(props)
        this.state={favoriteFood:"Chips"}
    }
    static getDerivedStateFromProps(props,state){
        return {favoriteFood:props.favFood}
    }
    changeFood=()=>{
        this.setState({favoriteFood:"Potatoes"})
    }
    render(){
        return (
            <div>
                <h5>My favorite food {this.state.favoriteFood}</h5>
                <button type="button" onClick={this.changeFood}>update</button>
            </div>
        )
    }
}
export default Update; 