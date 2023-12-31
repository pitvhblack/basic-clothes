import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
	const { cartItems, setVisible } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout")
    }

	return (
		<div className="cart-dropdown-container">
			{cartItems.length == 0 ? (
				<h3>nothing here</h3>
			) : (
				<div className="cart-items">
					{cartItems.map((item) => (
						<CartItem cartItem={item} key={item.id} />
					))}
				</div>
			)}

			<Button onClick={() => {goToCheckoutHandler(); setVisible() }}>Go to checkout</Button>
		</div>
	);
};

export default CartDropdown;
