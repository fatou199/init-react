import React, { Component } from "react";

class TimerForm extends Component{
    state = {
        title: this.props.title || '',
        project: this.props.project || '',

    }
    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleProjectChange = (e) => {
        this.setState({project: e.target.value})
    }

    handleClick = () => {
        const {title, project} = this.state;
        if(this.props.id){
            // Modifier
            const id = this.props.id;
            this.props.onFormSubmit({ id, title, project });
        } else{
            // Créer 
            this.props.onFormSubmit({ title, project });
        }
    }


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
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div className="form--item">
                    <label>Project</label>
                    <input 
                        type="text" 
                        placeholder="Mon projet" 
                        value={this.state.project}
                        onChange={this.handleProjectChange}
                    />
                </div>
            </div>
            <div className="form--button">
                <button className="button btn--submit" onClick={this.handleClick}>{submitText}</button>
                <button className="button btn--cancel" onClick={this.props.onCloseForm}>Annuler</button>
            </div>
        </div>
        )
    }
}

export default TimerForm;