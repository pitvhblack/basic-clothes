import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const { setVisible, cartCount } = useContext(CartContext);

	return (
		<div
			className="cart-icon-container"
			onClick={() => setVisible((prev) => !prev)}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
