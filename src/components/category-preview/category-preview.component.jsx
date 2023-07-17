import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h1>
				<div className="title" title={"See more!"}>
					<Link to={title}>
						{title}
					</Link>
				</div>
			</h1>
			<div className="preview">
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};
export default CategoryPreview;
