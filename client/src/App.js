import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Nav from './components/Nav';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios({
      method: 'get',
      url: '/api/product'
    })
    .then(result => {
      console.log(result.data)
      setProducts(result.data);
    })
    .catch(err => console.log(`Error: err.message`))

  }, []);

  const productList = products && products.map(product => 

    <>
    <Card key={product.id} style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.manufacturer}</Card.Subtitle>
        <Card.Text>
          Description goes here
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
        <Button variant="outline-primary" href="#">Edit</Button>{' '}
        <Button variant="outline-danger" href="#">Delete</Button>{' '}
      </Card.Body>
    </Card>

    <br></br>
    </>
  
  );

  return (
    <div className="App">
      <Container fluid>

      <Nav />
        
      <br></br>

        <ListGroup as="ol" numbered>
        {productList}
        </ListGroup>
      
      </Container>
    </div>
  );
}

export default App;
