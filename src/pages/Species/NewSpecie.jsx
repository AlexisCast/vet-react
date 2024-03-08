import SpecieForm from "../../components/SpecieForm/SpecieForm";

const NewSpecie = () => {
	const specie = {
		_id: "",
		name: "",
	};

	return (
		<div>
			<h1>New Specie</h1>
			<SpecieForm method="post" specie={specie} />
		</div>
	);
};

export default NewSpecie;
