import { useParams, useRouteLoaderData } from "react-router-dom";
import OwnerForm from "../../components/OwnerForm/OwnerForm";

const EditOwner = () => {
	const params = useParams();
	const data = useRouteLoaderData("owner-detail");
	console.log("owner-detail");
	console.log(data);

	return (
		<div>
			<h1>Edit Owner</h1>
			<p>{params.ownerId}</p>

			<OwnerForm method="put" owner={data} />
		</div>
	);
};

export default EditOwner;
