import ProductForm from "../../components/ProductForm/ProductForm";

const NewProduct = () => {
	const product = {
		name: "",
		category: "",
		img: "",
		price: "",
	};

	return (
		<div>
			<h1>NewProduct</h1>
			<ProductForm method="post" product={product} />
		</div>
	);
};

export default NewProduct;
