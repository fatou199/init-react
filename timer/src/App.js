// importer les modules dont on a besoin pour ce composant
import React, { Component }  from 'react';
import Item from './Item';

const list = [
  {id: "1", nom:"Sophine", age: "12"},
  {id: "2", nom:"Marco", age: "19"},
  {id: "3", nom:"Paulo", age: "29"},
  {id: "4", nom:"Mathilde", age: "34"},
];

// Créer le composant
class App extends Component {

  renderList(){
    return list.map(item => {
      return (
        <Item key={item.id} nom={item.nom} age={item.age}/>
      )
    })
  }

  render(){
    return (
      <div>
        <p> Je suis le composant App </p>
        {this.renderList()}
      </div>
    )
  }
}

// exporter le composant pour le rendre disponible

export default App;