import React, {Component} from "react";
import NavBarMenu from "../partials/menu";

class Demo1 extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return(<div className="container">
            <NavBarMenu />
            <div>
               Demo1
            </div>
        </div>)
    }
}

export default Demo1
