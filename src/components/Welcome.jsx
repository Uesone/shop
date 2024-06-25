import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container className="mt-5">
            <Alert variant="warning" className="text-center">
                <h1>Benvenuto nel negozio bello</h1>
            </Alert>
            <h3 className="text-center text-muted">Compra in questo bellissimo shop</h3>
        </Container>
    );
};

export default Welcome;
