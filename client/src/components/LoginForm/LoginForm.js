import React from 'react';
import { Button, Card } from 'react-materialize';
import PropTypes from 'prop-types';
import "./LoginForm.css";

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) => {
    return (


        < Card className='yellow darken-2' textClassName='white-text' title='Log in' >
            <form action="/login" onSubmit={onSubmit}>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errors.summary && <p className="error-message">{errors.summary}</p>}

                <input
                    placeholder="Email"
                    style={{ "margin-left": "35%", "margin-top": "10px", width: "30%" }}
                    type="text"
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

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;