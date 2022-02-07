import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center d-flex justify-content-center flex-column vh-100">
            <h1 className="text-danger">404</h1>
            <h2 className="my-3">You are looking for something that doesn't exist :'D </h2>
            <Link to="/"><Button variant="primary">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;