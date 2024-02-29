import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios({
      method: 'get',
      url: '/api/products'
    })
    .then(result => {
      console.log(result.data)
      setProducts(result.data);
    })
    .catch(err => console.log(`Error: err.message`))

  }, []);

  // <ListGroup.Item key={product.id}> {product.product_name} {product.flex_code}</ListGroup.Item>

  const productList = products && products.map(product => 
    <Card key={product.id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.manufacturer}</Card.Subtitle>
        <Card.Text>
          Description goes here
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
        <Card.Link href="#">Add to cart</Card.Link>
      </Card.Body>
    </Card>
  );

  return (
    <div className="App">
    
    <div>
      <ListGroup as="ol" numbered>
      {productList}
      </ListGroup>
    </div>

    </div>
  );
}

export default App;
