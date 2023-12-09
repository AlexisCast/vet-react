import { useParams } from "react-router-dom";

const EditProduct = () => {
	const params = useParams();

	return (
		<div>
			<h1>EditProduct Page</h1>
			<p>{params.productId}</p>
		</div>
	);
};

export default EditProduct;
