import React from 'react';
import {ThemeProvider } from 'styled-components'
import { BrowserRouter as Router} from "react-router-dom";
import theme from './core/constants/theme'
import Layout from './containers/Layout'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout/>
      </Router>
    </ThemeProvider>
  );
}

export default App;