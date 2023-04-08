// importer les modules dont on a besoin pour ce composant
import React, { Component }  from 'react';
import Item from './Item';

const list = [
  {id: "1", nom:"Sophine", age: "12", rouge: true},
  {id: "2", nom:"Marco", age: "19", rouge: false},
  {id: "3", nom:"Paulo", age: "29", rouge: true},
  {id: "4", nom:"Mathilde", age: "34", rouge: false},
];

// Créer le composant
class App extends Component {

  // Premiere methode pour definir le state
  // constructor(props){
  //   super(supers);
  //   state = {
  //      loading: true 
  //   }
  // }

  // Deuxieme maniere de definir les state
  state = {
    loading: true 
  }

  // evenement emis par notre composant lorsque celui ci a rendu
  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false})
    }, 3000)
  }

  renderList(){
    return list.map(item => {
      return (
        <Item key={item.id} nom={item.nom} age={item.age} rouge={item.rouge}/>
      )
    })
  }

  render(){
    return (
      <div>
        {this.state.loading ? 
        (
          <p>Chargement en cours...</p>
        ):(
          <div>
            <p> Je suis le composant App </p>
            {this.renderList()}
          </div>
        )}
      </div>
    )
  }
}

// exporter le composant pour le rendre disponible

export default App;