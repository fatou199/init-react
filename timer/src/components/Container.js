import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class Container extends Component{

    render(){
        return(
        <div>
           {this.props.isFormOpen ? (
               <TimerForm />
            ) : (
                <Timer 
                    title="Apprendre React"
                    projet="Développement Web"
                    id="1"
                    elapsed="8986300" // temps écoulé
                    runningSince={null} // depuis quand le timer est lancé
                />
            )}
        </div>
        )
    }
}

export default Container;