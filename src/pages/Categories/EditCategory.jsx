import { useParams, useRouteLoaderData } from "react-router-dom";
import CategoryForm from "../../components/CategoryForm/CategoryForm";

const EditCategory = () => {
	const params = useParams();
	const data = useRouteLoaderData("category-detail");
	console.log("category-detail");
	console.log(data);

	return (
		<div>
			<h1>Edit Category Page</h1>
			<p>{params.categoryId}</p>

			<CategoryForm category={data} />
		</div>
	);
};

export default EditCategory;
