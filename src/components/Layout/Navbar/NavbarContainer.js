import React from 'react'
import NavbarView from './NavbarView';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/action/authActions";

const NavbarContainer = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const authStatus = useSelector((auth) => auth);

    const logout = (e) =>{
        e.preventDefault();
        dispatch(logoutUser(history))
        console.log("logout")
    }

    return (
        <NavbarView 
        {...authStatus}
        logout={logout}
        />
    )
}

export default NavbarContainer
