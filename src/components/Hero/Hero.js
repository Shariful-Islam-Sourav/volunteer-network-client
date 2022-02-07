import React from 'react';

const Hero = () => {
    return (
        <div className="my-4 text-center">
        <h1>I grow by helping people in need.</h1>
        <input
          type="text"
          className="form-control w-50 mx-auto mt-4 d-inline border-end-0 rounded-0 rounded-start"
          placeholder="Search"
        />
         <input className="btn btn-primary mb-1 rounded-0 rounded-end" type="button" value="Search" />
      </div>
    );
};

export default Hero;