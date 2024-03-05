import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Nav(props) {

    return(
    <Navbar className="bg-body-tertiary">
        <Button variant="outline-success" href="#">Add item</Button>{' '}
    </Navbar>
    )
}