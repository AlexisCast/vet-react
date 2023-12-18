import { useParams, useRouteLoaderData } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";

const EditProduct = () => {
	const params = useParams();
	const data = useRouteLoaderData("product-detail");
	console.log(data);

	return (
		<div>
			<h1>EditProduct Page</h1>
			<p>{params.productId}</p>

			<ProductForm product={data} />
		</div>
	);
};

export default EditProduct;
