// importer les modules dont on a besoin pour ce composant
import React, { Component }  from 'react';
import Box from './components/Box';
import './App.css';

// Créer le composant
class App extends Component {

  render(){
    return (
      <div className='App'>
        <Box />
      </div>
    )
  }
}

// exporter le composant pour le rendre disponible

export default App;