import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-dropdown.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const { setVisible } = useContext(CartDropdownContext);

	return (
		<div
			className="cart-icon-container"
			onClick={() => setVisible((prev) => !prev)}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">10</span>
		</div>
	);
};

export default CartIcon;
