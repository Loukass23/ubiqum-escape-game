import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import AddTeam from './components/AddTeam';
import Header from './components/Header';
import Paper from '@material-ui/core/Paper';


function App() {
  return (

    <div className="App">
    
      <video autoPlay muted loop id="myVideo"
       src="https://ubiqum.com/assets/uploads/2018/10/ubiqum-home_968_08.mp4" >

      </video>
     <div class="content">
      <Paper >
      <Header  />
      <Landing />
      </Paper>
      </div>

    </div>

  );
}

export default App;
