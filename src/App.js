import React from 'react';
import NavbarContainer from './components/Layout/Navbar/NavbarContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import TeamlistContainer from './components/Layout/TeamList/TeamlistContainer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';

import { Provider } from 'react-redux'
import store from './redux/store'
import NewTeamContainer from './components/NewTeam/NewTeamContainer';
import setAuthToken from './utils/setAuthToken';
import { setUser } from './redux/action/authActions';

// set data from localStorage

if(localStorage.jwtToken && localStorage.user){
    setAuthToken(localStorage.jwtToken)

  //  dispatch set user action to auth reducer
    store.dispatch(setUser(JSON.parse(localStorage.user)));
}

const App = () => {
    return (
        <Provider store={store}>
        <Router>
            <NavbarContainer />
            <Route exact path="/"><TeamlistContainer /></Route>
            <Route exact path="/login"><LoginContainer /></Route>
            <Route exact path="/register"><RegisterContainer /></Route>
            <Route exact path="/createTeam"><NewTeamContainer /></Route>
            <Footer />
        </Router>
        </Provider>
    );
};

export default App;