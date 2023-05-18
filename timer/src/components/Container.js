import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class Container extends Component{
    state ={
        isFormOpen: false
    }

    handleEditFormOpen = () => {
        this.setState({
            isFormOpen: true
        })
    }

    handleEditFormClose = () => {
        this.setState({
            isFormOpen: false
        })
    }

    onFormSubmit = ({ id, title, project }) => {
        this.handleEditFormClose();
        this.props.onFormSubmit({ id, title, project });
    }

    render(){
        return(
        <div className="list--container">
           {this.state.isFormOpen ? (
            //   si le state isFormOpen est true, on affiche le formulaire timerForm
               <TimerForm 
                    title={this.props.title}
                    project={this.props.project}
                    id={this.props.id}
                    onFormSubmit={this.onFormSubmit}
                    onCloseForm={this.handleEditFormClose}
                />
            ) : (
            //   sinon on affiche le timer
                <Timer 
                    title={this.props.title}
                    project={this.props.project}
                    id={this.props.id}
                    elapsed={this.props.elapsed} // temps écoulé
                    runningSince={this.props.runningSince} // depuis quand le timer est lancé
                    onEditFormOpen={this.handleEditFormOpen}
                    onDelete={this.props.onDelete}
                    onPlay={this.props.onPlay}
                    onPause={this.props.onPause}
                />
            )}
        </div>
        )
    }
}

export default Container;