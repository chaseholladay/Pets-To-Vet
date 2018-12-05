import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ secretData }) => (
    <div className="container">
        <p>
            You should get access to this page only after authentication.
        </p>
        {secretData && <p style={{ fontSize: '16px', color: 'green' }}>{secretData}</p>}
    </div>
);

Dashboard.propTypes = {
    secretData: PropTypes.string.isRequired
};

export default Dashboard;