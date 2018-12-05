import React from 'react';
import Auth from '../../modules/Auth';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class Logout extends React.Component {


    componentDidMount() {
        Auth.deauthenticateUser();
    }

    render() {
        return (<Redirect to={{ pathname: "/" }} />);
    }

}

export default Logout;