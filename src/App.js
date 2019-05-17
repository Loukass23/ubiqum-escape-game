import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Header from './components/Header';
import Paper from '@material-ui/core/Paper';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';



function App() {
  return (

    <div className="App">

      <video autoPlay muted loop id="myVideo"
        src="https://ubiqum.com/assets/uploads/2018/10/ubiqum-home_968_08.mp4" >

      </video>
      <div className="content">
        <MuiThemeProvider theme={theme}>
          <Paper >
            <Header />
            <Landing />
          </Paper>
        </MuiThemeProvider>
      </div>

    </div>

  );
}

export default App;
