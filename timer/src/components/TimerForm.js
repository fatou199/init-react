import React, { Component } from "react";

class TimerForm extends Component{

    render(){
        const submitText = this.props.title ? 'Modifier' : 'Ajouter';
        return(
        <div className="form">
            <div className="form--content">
                <div className="form--item">
                    <label>Title</label>
                    <input 
                        type="text" 
                        placeholder="Mon titre" 
                    />
                </div>
                <div className="form--item">
                    <label>Projet</label>
                    <input 
                        type="text" 
                        placeholder="Mon projet" 
                    />
                </div>
            </div>
            <div className="form--button">
                <button className="button btn--submit">{submitText}</button>
                <button className="button btn--cancel">Annuler</button>
            </div>
        </div>
        )
    }
}

export default TimerForm;