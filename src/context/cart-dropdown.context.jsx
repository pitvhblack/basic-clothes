import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
    return [ ...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
	visible: null,
	setVisible: () => null,
	cartItems: [],
	addItemToCart: () => null,
});

export const CartProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = { visible, setVisible, cartItems, addItemToCart };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
