import React  from "react";
class Shot extends React.Component{
    constructor(props){
        super(props)
        this.state={favoriteLesson:"JS"}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteLesson:"Database"})
        },1000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('div1').innerHTML= 'Before the update, the favorite was '+prevState.favoriteLesson

    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="The updated favorite is "+this.state.favoriteLesson

    }
    render(){
        return(
            <>
            <h2>My favorite Lesson is {this.state.favoriteColor}</h2>
            <div id="div1"></div>
            <div id="div2"></div>
            </>
        )
    } 
}
export default Shot