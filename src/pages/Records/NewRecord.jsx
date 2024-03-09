import { useRouteLoaderData } from "react-router-dom";
import { checkAuthLoader } from "../../../util/auth";
import userService from "../../services/userService";
import RecordForm from "../../components/RecordForm/RecordForm";

const NewRecord = () => {
	const data = useRouteLoaderData("new_recordsData");
	console.log("new_recordsData");
	console.log(data);

	return (
		<div>
			<h1>New Medical Record</h1>
			<RecordForm method="post" listOfPatients={data} />
		</div>
	);
};

export default NewRecord;

export const loader = async ({ request, params }) => {
	const isAuth = checkAuthLoader();

	if (!isAuth) {
		try {
			const response = await userService.getAllPatients();
			return response;
		} catch (error) {
			console.error("Error loading data:", error);
			return null; // Or handle the error appropriately
		}
	} else {
		return null;
	}
};
