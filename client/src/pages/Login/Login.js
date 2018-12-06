import React from "react";
import LoginForm from "../../components/LoginForm";
import Auth from "../../modules/Auth";
import PropTypes from 'prop-types';
import axios from 'axios';

class LoginPage extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props, context) {
        super(props, context);

        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        // set the initial component state
        this.state = {
            errors: {},
            successMessage,
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        // create a string for an HTTP body message
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);

        // create an AJAX request

        let config = {
            method: "post",
            url: "/auth/login",
            data: {
                email: email,
                password: password
            },
            responseType: 'json'

        }
        axios(config)
            .then(res => {
                if (res.data.success) {
                    console.log(JSON.parse(res.config.data).email);
                    localStorage.setItem('user', JSON.parse(res.config.data).email);
                    // success

                    // change the component-container state
                    this.setState({
                        errors: {},
                        successMessage: res.data.message
                    });

                    Auth.authenticateUser(res.data.token)
                }
                else {
                    const errors = {};
                    errors.summary = res.request.response.message;
                }
            });
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    onSubmit={this.processForm}
                    onChange={this.changeUser}
                    errors={this.state.errors}
                    successMessage={this.state.successMessage}
                    user={this.state.user}
                />
            </div>
        );
    }

}

LoginPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default LoginPage;