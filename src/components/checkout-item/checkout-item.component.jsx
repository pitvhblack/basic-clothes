import "./checkout-item.styles.scss";
import { ReactComponent as Xmark } from "../../assets/xmark.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";

const CheckoutItem = ({ checkoutItem }) => {
	const { name, imageUrl, price, quantity } = checkoutItem;
	const { deleteItemFromCart, addItemToCart, decreaseQuantity } = useContext(CartContext);

	return (
		<div className="checkout-item-container">
			<div className="item-property">
				<img src={imageUrl} alt={name} />
			</div>

			<div className="item-property">
				<h3>{name}</h3>
			</div>

			<div className="item-property quantity">
				<Chevron onClick={() => decreaseQuantity(checkoutItem)}/>
				<span>{quantity}</span>
				<Chevron onClick={() => addItemToCart(checkoutItem)} />
			</div>

			<div className="item-property">
				<span>${price * quantity}</span>
			</div>

			<div className="delete-item">
				<Xmark onClick={() => deleteItemFromCart(checkoutItem)} />
			</div>
		</div>
	);
};
export default CheckoutItem;
