import { useState } from "react";

const Counter = ({ currPrice, updatePrice, price}) => {
	
	const [count, setCount] = useState(0);

	const add = () => {
		setCount(count + 1)
		updatePrice(currPrice + price)
	}

	const subtract = () => {
		setCount(count - 1)
		updatePrice(currPrice - price)
	}


return (
	<div>
		<h3>Quantity {count}</h3>
		<button onClick={() => subtract()}>-</button>
		<button onClick={() => add()}>+</button>
	</div>
)
}

export default Counter;


