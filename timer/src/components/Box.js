import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";

class Box extends Component{
    state ={
        timers: [
            {
                title: "Apprendre React",
                project: "Développement Web",
                id: "1",
                elapsed: "8986300",
                runningSince: null
            },
            {
                title: "Apprendre Angular",
                project: "Développement Web",
                id: "2",
                elapsed: "1348905",
                runningSince: null
            },
        ]
    }

    render(){
        return(
        <div className="boxed--view">
            <div className="boxed--view__box">
                <ListContainer timers={this.state.timers} />
                <ActionContainer />
            </div>
        </div>
        )
    }
}

export default Box;