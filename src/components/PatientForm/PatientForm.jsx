import { useState } from "react";
import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
	json,
	redirect,
} from "react-router-dom";

import styles from "./PatientForm.module.css";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

import noImage from "../../assets/no-image.jpg";
import Dropdown from "../Dropdown/Dropdown";

const client_url = import.meta.env.VITE_CLIENT_URL;

const PatientForm = ({ method, patient, listOfOwners, listOfSpecies }) => {
	//	Dropdown states for Owner
	const [selectedOwnerName, setSelectedOwnerName] = useState(null);
	const [selectedOwnerId, setSelectedOwnerId] = useState(null);
	const [selectedOwnerPhoneNumber1, setSelectedOwnerPhoneNumber1] =
		useState(null);

	//	Dropdown states for Species
	const [selectedSpeciesId, setSelectedSpeciesId] = useState(null);
	const [selectSpeciesName, setSelectSpeciesName] = useState(null);

	//	Image states
	const [image, setImage] = useState(patient ? patient.image : null);
	const [previewUrl, setPreviewUrl] = useState(
		patient ? patient.image : null
	);

	const data = useActionData();

	const { total: totalOwners, owners } = listOfOwners;
	const { total: totalSpecies, species } = listOfSpecies;

	console.log("data PatientForm");
	console.log(data);

	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

	const {
		_id,
		age,
		gender,
		img,
		name,
		note,
		owner,
		specie,
		sterilized,
		user,
		weight,
	} = patient;

	const ownerOptions = owners.map((item) => ({
		id: item._id,
		option: `${item.name} ${item.lastName}`,
	}));

	const speciesOptions = species.map((item) => ({
		id: item._id,
		option: `${item.name}`,
	}));

	const handleSelectOwner = (option) => {
		const filteredOwnerData = owners.filter((item) => item._id == option);

		if (filteredOwnerData.length == 0) {
			setSelectedOwnerName(null);
			setSelectedOwnerId(null);
			setSelectedOwnerPhoneNumber1(null);
		} else {
			setSelectedOwnerName(
				filteredOwnerData[0].name + " " + filteredOwnerData[0].lastName
			);
			setSelectedOwnerId(filteredOwnerData[0]._id);
			setSelectedOwnerPhoneNumber1(filteredOwnerData[0].phoneNumber1);
		}
	};

	const handleSelectSpecie = (option) => {
		const filteredSpeciesData = species.filter(
			(item) => item._id == option
		);

		if (filteredSpeciesData.length == 0) {
			setSelectedSpeciesId(null);
		} else {
			setSelectedSpeciesId(filteredSpeciesData[0]._id);
			setSelectSpeciesName(filteredSpeciesData[0].name);
		}
	};

	// const ownerOptions = [
	// 	{ id: "65e0fdacf84beca149f75a8f1", option: "HELLO1", lastName: "WORLD" },
	// 	{ id: "65e0fdacf84beca149f75a8f2", option: "HELLO2", lastName: "WORLD" },
	// 	{ id: "65e0fdacf84beca149f75a8f3", option: "HELLO3", lastName: "WORLD" },
	// ];

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		// Set the selected file in state
		setImage(file);

		// Show image preview
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setPreviewUrl(null);
		}
	};

	return (
		<Form
			method={method}
			className={styles.form}
			encType="multipart/form-data"
		>
			{data && data.msg && (
				<ul>
					<li key={data.msg}>{data.msg}</li>
				</ul>
			)}
			<p>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					required
					defaultValue={patient ? name : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="url"
					name="image"
					// required
					defaultValue={patient ? patient.img : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Current Image</label>
				{patient.img ? (
					<img src={patient.img} alt={patient.name} />
				) : (
					<img src={noImage} alt="noImage" />
				)}
				{/* Change input type to file */}
				<input
					id="file"
					type="file"
					name="file"
					onChange={handleImageChange}
					required={!patient}
				/>
			</p>
			{previewUrl && (
				<img
					src={previewUrl}
					alt="Preview"
					style={{ maxWidth: "100%", maxHeight: "200px" }}
				/>
			)}
			<>
				<label htmlFor="selected_option">
					Selected Specie: {selectedSpeciesId}
				</label>
				<Dropdown
					text="Select a Specie"
					options={speciesOptions}
					onSelect={handleSelectSpecie}
					selectedOptionDefault={specie._id}
				/>
			</>
			<p>
				<label htmlFor="specie">Specie</label>
				<input
					id="specie"
					type="text"
					name="specie"
					required
					value={selectedSpeciesId || (specie && specie._id) || ""}
					readOnly
				/>
			</p>
			<p>
				<label htmlFor="age">Age</label>
				<input
					id="age"
					type="text"
					name="age"
					// required
					defaultValue={patient ? age : ""}
				/>
			</p>
			<p>
				<label htmlFor="weight">Weight</label>
				<input
					id="weight"
					type="text"
					name="weight"
					// required
					defaultValue={patient ? weight : ""}
				/>
			</p>
			<p>
				<label htmlFor="gender">Gender</label>
				<input
					id="gender"
					type="text"
					name="gender"
					// required
					defaultValue={patient ? gender : ""}
				/>
			</p>
			<p>
				<label htmlFor="sterilized">Sterilized</label>
				<input
					id="sterilized"
					type="text"
					name="sterilized"
					// required
					defaultValue={patient ? sterilized : ""}
				/>
			</p>
			<p>
				<label htmlFor="sterilized">Note</label>
				<input
					id="note"
					type="text"
					name="note"
					// required
					defaultValue={patient ? note : ""}
				/>
			</p>
			<>
				<label htmlFor="selected_option">
					Selected Owner: {selectedOwnerId}
				</label>
				<Dropdown
					text="Select an Owner"
					options={ownerOptions}
					onSelect={handleSelectOwner}
					selectedOptionDefault={owner._id}
				/>
			</>
			<p>
				<label htmlFor="owner_id">Owners ID</label>
				<input
					id="owner_id"
					type="text"
					name="owner_id"
					required
					value={selectedOwnerId || (owner && owner._id) || ""}
					readOnly
				/>
			</p>
			<p>
				<label htmlFor="owner_name">Owners Name</label>
				<input
					id="owner_name"
					type="text"
					name="owner_name"
					value={
						selectedOwnerName ||
						(owner && owner.name + " " + owner.lastName) ||
						""
					}
					readOnly
				/>
			</p>
			<p>
				<label htmlFor="owner_phoneNumber1">Phone Number 1</label>
				<input
					id="owner_phoneNumber1"
					type="text"
					name="ownerphoneNumber1"
					value={
						selectedOwnerPhoneNumber1 ||
						(owner && owner.phoneNumber1) ||
						""
					}
					readOnly
				/>
			</p>
			<div className={styles.actions}>
				<button
					disabled={isSubmitting}
					type="button"
					onClick={cancelHandler}
				>
					Cancel
				</button>
				<button disabled={isSubmitting}>
					{isSubmitting ? "... Submitting" : "Save"}
				</button>
			</div>
		</Form>
	);
};

export default PatientForm;

export const action = async ({ request, params }) => {
	const method = request.method;

	const data = await request.formData();

	const eventData = {
		name: data.get("name"),
		specie: data.get("specie"),
		age: data.get("age"),
		weight: data.get("weight"),
		gender: data.get("gender"),
		sterilized: data.get("sterilized"),
		note: data.get("note"),
		owner: data.get("owner_id"),
		file: data.get("file"),
	};

	console.log("eventData");
	console.log(eventData);

	// Get authentication token
	const token = getAuthToken();

	// Set API endpoint URL based on request method
	let url = `${client_url}/api/patients`;
	if (method === "PUT") {
		const eventId = params.patientId;
		url = `${client_url}/api/patients/${eventId}`;
	}

	// Set up fetch options
	const fetchOptions = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	};

	if (method === "PUT" || method === "POST") {
		// Add body for PUT and POST requests
		fetchOptions.body = JSON.stringify(eventData);
	}

	// Make the API request
	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const responseData = await response.clone().json();

		isTokenExpired(responseData?.msg);
		// throw json({ msg: "Could not save category." }, { status: 500 });
		return response;
	} else {
		// Handle success
		const responseData = await response.clone().json();
		const { _id } = responseData;

		// If it's a PUT or POST request and there's a file, update the image separately
		if (
			(method === "PUT" || method === "POST") &&
			eventData.file.size > 0
		) {
			// Determine patientId based on method
			const patientId = method === "POST" ? _id : params.patientId;

			const urlToUpdateImage = `${client_url}/api/uploads/patients/${patientId}`;

			// Set up formData for image update
			const formData = new FormData();
			formData.append("file", eventData.file);

			// Make the image update request
			const imageUpdateResponse = await fetch(urlToUpdateImage, {
				method: "PUT",
				headers: {
					"x-token": token,
				},
				body: formData,
			});

			if (!imageUpdateResponse.ok) {
				// Handle image update errors
				const responseData = await imageUpdateResponse.clone().json();
				isTokenExpired(responseData?.msg);
				return imageUpdateResponse;
			}
		}
	}

	console.log(await response);

	return redirect("/patients");
};
