import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) => {
    return (
        <form action="/signup" onSubmit={onSubmit}>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <h5 style={{ "textAlign": "center" }}>Username</h5>
            <input
                style={{ "margin": "40px" }}
                type="text"
                name="username"
                errortext={errors.name}
                onChange={onChange}
                value={user.name}
            />
            <h5 style={{ "textAlign": "center" }}>Email</h5>
            <input
                style={{ "margin": "40px" }}
                type="email"
                name="email"
                errortext={errors.email}
                onChange={onChange}
                value={user.email}
            />
            <h5 style={{ "textAlign": "center" }}>Password</h5>
            <input
                style={{ "margin": "40px" }}
                type="password"
                name="password"
                onChange={onChange}
                errortext={errors.password}
                value={user.password}
            />
            <input style={{ "margin": "40px" }} type="submit" value="Submit" />
        </form>
    );
};

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignupForm;