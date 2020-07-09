import React, {Component} from "react";
import NavBarMenu from "../partials/menu";

class Demo extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return(<div className="container">
            <NavBarMenu />
            <div>
                Demo
            </div>
        </div>)
    }
}

export default Demo
