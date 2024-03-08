import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../services/userService";
import SpecieForm from "../../components/SpecieForm/SpecieForm";

const EditSpecie = () => {
	const params = useParams();

	const [specie, setSpecie] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await userService.getSpecieById(
					params.specieId
				);
				console.log(await response);
				setSpecie(response);
			} catch (error) {
				// Handle error
				console.error(
					"Error fetching data on EditPatient page:",
					error
				);
			}
		};

		fetchData();
	}, []);

	if (specie === null) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Edit Specie</h1>
			<SpecieForm method="put" specie={specie} />
		</div>
	);
};
export default EditSpecie;
