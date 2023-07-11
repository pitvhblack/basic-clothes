import { createContext, useEffect, useState } from "react";

// Add new item to the cart
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
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Delete item from the cart
const deleteCartItem = (cartItems, productToDelete) => {
	return cartItems.filter((cartItem) => cartItem.id != productToDelete.id);
};

// Change quantity of a product
const decreaseProductQuantity = (cartItems, product) => {
	if (product.quantity > 1) {
		return cartItems.map((cartItem) =>
			cartItem.id === product.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	} else {
		return deleteCartItem(cartItems, product);
	}
};

export const CartContext = createContext({
	visible: null,
	setVisible: () => null,
	cartItems: [],
	addItemToCart: () => null,
	deleteItemFromCart: () => null,
	decreaseQuantity: () => null,
	totalPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [cartCount, setCartCount] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const deleteItemFromCart = (productToDelete) => {
		setCartItems(deleteCartItem(cartItems, productToDelete));
	};

	const decreaseQuantity = (product) => {
		setCartItems(decreaseProductQuantity(cartItems, product));
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotalPrice = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		setTotalPrice(newTotalPrice);
	}, [cartItems]);

	const value = {
		visible,
		setVisible,
		cartItems,
		addItemToCart,
		deleteItemFromCart,
		decreaseQuantity,
		totalPrice,
		cartCount,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
