import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
	const { cartItems, totalPrice } = useContext(CartContext);

	return (
		<div className="checkout-list">
			<div className="checkout-description">
				<h3>Product</h3>
				<h3>Description</h3>
				<h3>Quantity</h3>
				<h3>Price</h3>
				<h3>Remove</h3>
			</div>

			<div className="checkout-list-container">
				{cartItems.length == 0 ? (
					<h3>nothing here</h3>
				) : (
					<div className="cart-items">
						{cartItems.map((item) => (
							<CheckoutItem
								checkoutItem={item}
								key={item.id}
							/>
						))}
					</div>
				)}
			</div>

            <div className="total-price">
                <h2>Total: ${totalPrice}</h2>
            </div>
		</div>
	);
};
export default Checkout;
