
const budget = 30

const Cart = ({ currPrice }) => {

	const budgetValue = budget - currPrice


	return (
		<div>
			<span>Budget: {budget}</span><br></br>
			{/* <input></input> */}
			<span>Current Total: {currPrice.toFixed(2)}€</span><br></br>
			<span>Current Value: {budgetValue.toFixed(2)}€</span>
		</div>

	)
}

export default Cart;

