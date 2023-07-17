import React from "react";
import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ categoryInfo: { id, title, imageUrl } }) => {
	const navigation = useNavigate();

	const onNavigateHandler = () => navigation(`/shop/${title}`);

	return (
		<div className="directory-item-container" key={id}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>

			<div
				className="directory-body-container"
				onClick={onNavigateHandler}
			>
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
