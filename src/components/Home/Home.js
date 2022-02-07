import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import Works from '../Works/Works';

const Home = () => {
    return (
        <Container>
            <Hero></Hero>
            <Works></Works>
        </Container>
    );
};

export default Home;