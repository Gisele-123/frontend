import React from "react";
class Header extends React.Component{
    constructor(props){

        super(props)
        this.state={favColor:'Sky blue'}
    }
     static getDerivedStateFromProps(props,state){
return{favColor:props.favcol};
     }//it makes the color to be delivered from favcol not from real one or the first one which was favColor
     render(){
        return (
<footer>{this.state.favColor}</footer>//all rights or favColor were given to favcol hence it will change color as long as it wants
        )

     }
}
export default Header;