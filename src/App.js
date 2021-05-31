import React from 'react';
import NavbarContainer from './components/Layout/Navbar/NavbarContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import TeamlistContainer from './components/Layout/TeamList/TeamlistContainer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';

const App = () => {
    return (
        <Router>
            <NavbarContainer />
            <Route exact path="/"><TeamlistContainer /></Route>
            <Route exact path="/login"><LoginContainer /></Route>
            <Route exact path="/register"><RegisterContainer /></Route>
            <Footer />
        </Router>
    );
};

export default App;