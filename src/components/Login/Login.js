import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="volunteer-bg d-flex justify-content-center align-items-center text-center">
        <div className="bg-white p-5 login-box d-flex align-items-center">
          <div className="flex-grow-1">
            <h2 className="fw-bold">Login With</h2>
            <div className="border rounded-pill text-center mt-5 mb-3 volunteer-login-btn p-1">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />
              <p className="d-inline">Continue with Google</p>
            </div>
            <p>Don't have an account? <Link to="/register">Register now</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;