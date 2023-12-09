import { Link } from "react-router-dom";
import { mockProducts } from "../mock/products";

const Products = () => {
	const products = mockProducts;

	return (
		<div>
			<h1>Products </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<ul>
				{products.map((prod) => (
					<li key={prod.id}>
						<Link to={`/products/${prod.id}`}>{prod.title}</Link>{' - '}
						<Link to={`/products/${prod.id}/edit`}>Edit</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
