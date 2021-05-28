import React from 'react';
import NavbarContainer from './components/Layout/Navbar/NavbarContainer';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Layout/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <NavbarContainer />
            <Footer />
        </BrowserRouter>
    );
};

export default App;