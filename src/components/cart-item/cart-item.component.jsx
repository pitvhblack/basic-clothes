import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={name} />

			<div className="cart-item-info">
				<h4>{name}</h4>
				<span>{`${quantity} x $${price}`}</span>
			</div>
		</div>
	);
};
export default CartItem;
