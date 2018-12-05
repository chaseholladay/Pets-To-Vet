import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) => {
    return (
        <form action="/login" onSubmit={onSubmit}>
            <h5 style={{ "textAlign": "center" }}>email</h5>

            {successMessage && <p className="success-message">{successMessage}</p>}
            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <input
                style={{ "margin": "40px" }}
                type="text"
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

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;