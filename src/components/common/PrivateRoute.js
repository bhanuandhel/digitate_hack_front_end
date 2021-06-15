import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const dispatch = useDispatch();
    const authStatus = useSelector((auth) => auth);

    if(authStatus.auth.isAuthenticated){
            return(
                    props.children
            )
    }else{
        return (
          <Redirect to="/login" />
        )
    }
    // return (
    //     <div>
            
    //     </div>
    // )
}

export default PrivateRoute
