import './App.css';
import ProductList from '../ProductList';
import Header from '../Header';
import Cart from '../Cart';
import { useState } from 'react';

function App() {

	const [priceTotal, setPricetotal] = useState(0);

  return (
	<div>
		<Header />
		<ProductList currPrice={priceTotal} updatePrice={setPricetotal}/>
		<Cart currPrice={priceTotal}/>
	</div>
  );
}

export default App;
