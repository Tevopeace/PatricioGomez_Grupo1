import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

function Body() {
    return (
        <Card className="text-center">
            <Card.Header>Producto en oferta</Card.Header>
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <img
                    src="./sekiro1.jpg"
                    alt="Sekiro Shadow Die Twice"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <Card.Text>Sekiro Shadow Die Twice.</Card.Text>
                <Card.Text>Ps4 version</Card.Text>
                <Button variant="outline-info">Inspeccionar Producto</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}

export default Body;
