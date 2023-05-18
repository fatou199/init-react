import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";
import { v4 as uuidv4 } from 'uuid';

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

    handleCreateTimer = ({title, project}) => {
        const timer = {
            title, 
            project, 
            id: uuidv4(), 
            elapsed: 0, 
            runningSince: null
        };
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }

    handleEditTimer = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project,
                    }
                }
                return{
                    ...timer
                }
            })
        })
    }

    handleDeleteTimer = (id) => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        })
    }

    render(){
        return(
        <div className="boxed--view">
            <div className="boxed--view__box">
                <ListContainer 
                    onFormSubmit={this.handleEditTimer} 
                    onDelete={this.handleDeleteTimer}
                    timers={this.state.timers} 
                />
                <ActionContainer onFormSubmit={this.handleCreateTimer}/>
            </div>
        </div>
        )
    }
}

export default Box;