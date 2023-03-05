import React from "react";

class Mount extends React.Component{
    constructor(props){
        super(props)
        this.state={favName:'Gisele'}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favName:"Migisha"})
        },1000)
    }
    render(){
        return (
            <h1>My favorite name is  Gisele Akuzwe</h1>
        )
    }
}
export default Mount;