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

    handlePlayTimer = (id) => {
        console.log("play");
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        runningSince: now
                    }
                }else {
                    return{
                        ...timer
                    }
                }
            })
        })
    }

    handlePauseTimer = (id) => {
        console.log("pause");
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed
                    }
                }else {
                    return{
                        ...timer
                    }
                }
            })
        })
    }

    render(){
        return(
        <div className="boxed--view">
            <div className="boxed--view__box">
                <ListContainer 
                    onFormSubmit={this.handleEditTimer} 
                    onDelete={this.handleDeleteTimer}
                    onPlay={this.handlePlayTimer}
                    onPause={this.handlePauseTimer}
                    timers={this.state.timers} 
                />
                <ActionContainer onFormSubmit={this.handleCreateTimer}/>
            </div>
        </div>
        )
    }
}

export default Box;