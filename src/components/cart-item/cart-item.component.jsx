import styles from "./cart-item.styles.module.scss";

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<div className={styles.cartItemContainer}>
			<img src={imageUrl} alt={name} />

			<div className={styles.cartItemInfo}>
				<h4>{name}</h4>
				<span>{`${quantity} x $${price}`}</span>
			</div>
		</div>
	);
};
export default CartItem;
