import React from "react";
class After extends React.Component{
    constructor(props){
        super(props)
        this.state={favoriteShoe:"Jordan"}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteShoe:"Barlene"})
        },1000)
    }
    componentDidUpdate(){
        document.getElementById('myDiv').innerHTML="The updated favorite is "+this.state.favoriteShoe
    }
    render(){
        return(
            <>
            <h1>My favorite shoe is {this.state.favoriteShoe}</h1>
            <div id="myDiv"></div>
            </>
        )
    }
}
export default After