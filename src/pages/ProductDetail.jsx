import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const params = useParams();

	return (
		<div>
			<h1>Product Detail</h1>
			<p>{params.productId}</p>
		</div>
	);
};

export default ProductDetailPage;
