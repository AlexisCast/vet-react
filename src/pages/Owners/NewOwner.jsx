import OwnerForm from "../../components/OwnerForm/OwnerForm";

const NewOwner = () => {
	const owner = {
		_id: "",
		address: "",
		email: "",
		lastName: "",
		name: "",
		other: "",
		phoneNumber1: "",
		phoneNumber2: "",
	};

	return (
		<div>
			<h1>New Owner</h1>
			<OwnerForm method="post" owner={owner} />
		</div>
	);
};

export default NewOwner;
