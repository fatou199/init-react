import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class Container extends Component{
    state ={
        isFormOpen: false
    }
    render(){
        return(
        <div className="list--container">
           {this.state.isFormOpen ? (
               <TimerForm 
                    title={this.props.title}
                    project={this.props.project}
                />
            ) : (
                <Timer 
                    title={this.props.title}
                    project={this.props.project}
                    id={this.props.id}
                    elapsed={this.props.elapsed} // temps écoulé
                    runningSince={this.props.runningSince} // depuis quand le timer est lancé
                />
            )}
        </div>
        )
    }
}

export default Container;