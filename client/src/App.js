import {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios'

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

  const productList = products && products.map(product => <li key={product.id}> {product.product_name} </li>);

  return (
    <div className="App">
    
    <div>
      {productList}
    </div>

    </div>
  );
}

export default App;
