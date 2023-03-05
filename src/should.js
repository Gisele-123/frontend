import React from "react";
class Should extends React.Component{
    constructor(props){
        super(props)
        this.state={favoriteDrink:"Greybolt"}
    }
    shouldComponentUpdate(){
        return true
    }
    changeDrink=()=>{
        this.setState({favoriteDrink:"Water"})
    }
    render(){
        return (
            <>
            <h3>My favorite drink is {this.state.favoriteDrink}</h3>
            <button type="button" onClick={this.changeDrink}>Change drink</button>
            </>
        )
    }
}

export default Should;