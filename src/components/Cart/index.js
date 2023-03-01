import "./Cart.css"


const budget = 30

const Cart = ({ currPrice }) => {

	const budgetValue = budget - currPrice


	return (
		<div className="budget-container">
			<span className="budget-info">Budget: {budget}</span><br></br>
			{/* <input></input> */}
			<span className="budget-info">Current Total: {currPrice.toFixed(2)}€</span><br></br>
			<span className="budget-info">Current Value: {budgetValue.toFixed(2)}€</span>
		</div>

	)
}

export default Cart;

