import React from 'react';
import { Button, Card } from 'react-materialize';
import PropTypes from 'prop-types';
import "./Signup.css";

const SignupForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) => {
    return (


        // { errors.summary && <p className="error-message">{errors.summary}</p> }


        < Card className='yellow darken-2' textClassName='black-text' title='Sign in'>
            <form action="/signup" onSubmit={onSubmit}>
                <input
                    placeholder="Username"
                    style={{ "margin-left": "35%", "margin-top": "10px", width: "30%" }}
                    type="text"
                    name="username"
                    errortext={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
                <input
                    placeholder="Email"
                    style={{ "margin-left": "35%", "margin-top": "10px", width: "30%" }}
                    type="email"
                    name="email"
                    errortext={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
                <input
                    placeholder="Password"
                    style={{ "margin-left": "35%", "margin-top": "10px", width: "30%" }}
                    type="password"
                    name="password"
                    onChange={onChange}
                    errortext={errors.password}
                    value={user.password}
                />
                <Button type="submit" value="submit">Submit</Button>
            </form>
        </Card >

    );
};

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignupForm;