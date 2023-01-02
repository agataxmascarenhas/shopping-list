import productList from "../../utils/db";
import Counter from "../Counter";
import "./index.css"

const ProductList = ({ currPrice, updatePrice}) => {

	return (
		<div>{productList.map((item) =>
			<div key={item.id}>
				<h2>{item.title} - {item.price}€</h2>
				<span>Category: {item.category}</span><br></br>
				<span>Importance: {item.importance}%</span><br></br>
				<span>Quantity: {item.quantity_needed} </span><br></br>
				<img alt={item.altText} className="itempic" src={item.imageSrc} /><br></br>
				<Counter currPrice={currPrice} updatePrice={updatePrice} price={item.price}/>
			</div>
		)}</div>
	)
}

export default ProductList;