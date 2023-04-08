// importer les modules dont on a besoin
import React, { Component } from 'react';

class Item extends Component {
    render(){
        return(
            <div>
                <p>{this.props.nom} a {this.props.age} ans</p>
            </div>
        )
    }
}

// exporter le composant pour le rendre disponible
export default Item 