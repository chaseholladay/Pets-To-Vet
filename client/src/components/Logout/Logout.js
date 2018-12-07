import React from 'react';
import Auth from '../../modules/Auth';
import { Redirect } from "react-router-dom";

class Logout extends React.Component {


    componentDidMount() {
        localStorage.removeItem('user');
        Auth.deauthenticateUser();
    }

    render() {
        return (<Redirect to={{ pathname: "/" }} />);
    }

}

export default Logout;