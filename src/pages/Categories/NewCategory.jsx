import CategoryForm from "../../components/CategoryForm/CategoryForm";

const NewCategory = () => {
	return (
		<div>
			<h1>NewCategory</h1>
			<CategoryForm method="post" />
		</div>
	);
};

export default NewCategory;
