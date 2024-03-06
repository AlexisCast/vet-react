import { useRouteLoaderData } from "react-router-dom";
import PatientForm from "../../components/PatientForm/PatientForm";
import userService from "../../services/userService";
import { checkAuthLoader } from "../../../util/auth";

const NewPatient = () => {
	const data = useRouteLoaderData("new-patientData");
	/* 	const [listOfOwners, setListOfOwners] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const owners = await userService.getAllOwners();
			setListOfOwners(owners);
		};
		fetchData();
	}, []);

	useEffect(() => {
		console.log("list ow NewPatient: ", listOfOwners);
	}, [listOfOwners]); */

	const patient = {
		age: "",
		gender: "",
		name: "",
		note: "",
		owner: "",
		specie: "",
		sterilized: "",
		user: "",
		_id: "",
		img: "",
	};

	return (
		<div>
			<h1>New Patient</h1>
			<PatientForm
				method="post"
				patient={patient}
				listOfOwners={data.owners}
				listOfSpecies={data.species}
			/>
		</div>
	);
};

export default NewPatient;

export const loader = async ({ request, params }) => {
	const isAuth = checkAuthLoader();

	if (!isAuth) {
		try {
			const [ownersResponse, speciesResponse] = await Promise.all([
				userService.getAllOwners(),
				userService.getAllSpecies(),
			]);
			return { owners: ownersResponse, species: speciesResponse };
		} catch (error) {
			console.error("Error loading data:", error);
			return null; // Or handle the error appropriately
		}
	} else {
		return null;
	}
};
