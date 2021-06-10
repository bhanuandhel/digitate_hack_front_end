import React from 'react';
import NavbarContainer from './components/Layout/Navbar/NavbarContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import setAuthToken from './utils/setAuthToken';
import { setUser } from './redux/action/authActions';

import Footer from './components/Layout/Footer';
import TeamlistContainer from './components/Layout/TeamList/TeamlistContainer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import NewTeamContainer from './components/NewTeam/NewTeamContainer';
import MyTeamContainer from './components/MyTeam/MyTeamContainer';

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
            <Route exact path="/my"><MyTeamContainer /></Route>
            <Footer />
        </Router>
        </Provider>
    );
};

export default App;