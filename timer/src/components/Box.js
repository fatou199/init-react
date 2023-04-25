import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";

class Box extends Component{

    render(){
        return(
        <div>
            <div>
                <ListContainer />
                <ActionContainer />
            </div>
        </div>
        )
    }
}

export default Box;