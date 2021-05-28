import React from 'react';
import NavbarContainer from './components/Layout/Navbar/NavbarContainer';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import TeamlistContainer from './components/Layout/TeamList/TeamlistContainer';

const App = () => {
    return (
        <BrowserRouter>
            <NavbarContainer />
            <TeamlistContainer />
            <Footer />
        </BrowserRouter>
    );
};

export default App;