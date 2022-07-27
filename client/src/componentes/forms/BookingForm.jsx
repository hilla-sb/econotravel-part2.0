import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BookingForm () { 
    return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu nombre" />
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Introduce tus apellidos" />
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu dirección" />
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control type="date" placeholder="Fecha inicio" />
            <Form.Label>Fecha Fin</Form.Label>
            <Form.Control type="date" placeholder="Fecha fin" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu email"/>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Introduce tu contraseña"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
)};

export default BookingForm;