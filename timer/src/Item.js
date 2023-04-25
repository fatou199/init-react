// importer les modules dont on a besoin
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    static propTypes = {
        nom: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        rouge: PropTypes.bool,
        job: PropTypes.bool
    }

    render(){
        return(
            <div>
                <p>{this.props.nom} a {this.props.age} ans</p>
                {this.props.rouge ? (
                    <p>Il est rouge</p>
                ):(
                    <p>Il est pas rouge</p>
                )}
            </div>
        )
    }
}


// exporter le composant pour le rendre disponible
export default Item;