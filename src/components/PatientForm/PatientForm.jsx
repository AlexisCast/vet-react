import { useState } from "react";
import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
	json,
	redirect,
} from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";
import RequiredLabel from "../RequiredLabel/RequiredLabel";

import noImage from "../../assets/no-image.jpg";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

import styles from "./PatientForm.module.css";

const client_url = import.meta.env.VITE_CLIENT_URL;

const PatientForm = ({ method, patient, listOfOwners, listOfSpecies }) => {
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

	//	Dropdown states for Owner
	const [selectedOwnerName, setSelectedOwnerName] = useState(
		owner ? owner.name + " " + owner.lastName : ""
	);
	const [selectedOwnerId, setSelectedOwnerId] = useState(
		owner ? owner._id : ""
	);
	const [selectedOwnerPhoneNumber1, setSelectedOwnerPhoneNumber1] = useState(
		owner ? owner.phoneNumber1 : ""
	);

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

	const genderOptions = [
		{ id: "M", option: "Male" },
		{ id: "F", option: "Female" },
	];

	const sterilizedOptions = [
		{ id: true, option: "Yes" },
		{ id: false, option: "No" },
	];

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
				<RequiredLabel htmlFor="name" required>
					Name
				</RequiredLabel>
				<input
					id="name"
					name="name"
					type="text"
					required
					defaultValue={patient ? name : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					name="image"
					type="url"
					defaultValue={patient ? patient.img : ""}
					readOnly
				/>
			</p>
			<p>
				<label htmlFor="file">Current Image</label>
				{patient.img ? (
					<img src={patient.img} alt={patient.name} />
				) : (
					<img src={noImage} alt="noImage" />
				)}
				{/* Change input type to file */}
				<input
					id="file"
					name="file"
					type="file"
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
				<RequiredLabel htmlFor="specie" required>
					Selected Specie:
				</RequiredLabel>
				<Dropdown
					id="specie"
					name="specie"
					text="Select a Specie"
					options={speciesOptions}
					onSelect={(option) => {
						console.log(option);
					}}
					selectedOptionDefault={specie._id}
					required
				/>
			</>
			<p>
				<RequiredLabel htmlFor="age" required>
					Age
				</RequiredLabel>
				<input
					id="age"
					name="age"
					type="text"
					required
					defaultValue={patient ? age : ""}
				/>
			</p>
			<p>
				<RequiredLabel htmlFor="weight" required>
					Weight
				</RequiredLabel>
				<input
					id="weight"
					name="weight"
					type="text"
					required
					defaultValue={patient ? weight : ""}
				/>
			</p>
			<>
				<label htmlFor="gender">Selected Gender:</label>
				<Dropdown
					id="gender"
					name="gender"
					text="Select a Gender"
					options={genderOptions}
					onSelect={(option) => {
						console.log(option);
					}}
					selectedOptionDefault={gender}
				/>
			</>
			<>
				<label htmlFor="sterilized">Selected Sterilized Status:</label>
				<Dropdown
					id="sterilized"
					name="sterilized"
					text="Select Sterilized Status"
					options={sterilizedOptions}
					onSelect={(option) => {
						console.log(option);
					}}
					selectedOptionDefault={sterilized || false}
				/>
			</>
			<p>
				<label htmlFor="note">Note</label>
				<input
					id="note"
					name="note"
					type="text"
					defaultValue={patient ? note : ""}
				/>
			</p>
			<>
				<RequiredLabel htmlFor="ownerID" required>
					Selected Owner:
				</RequiredLabel>
				<Dropdown
					id="ownerID"
					name="ownerID"
					text="Select an Owner"
					options={ownerOptions}
					onSelect={handleSelectOwner}
					selectedOptionDefault={owner._id}
					required
				/>
			</>
			<p>
				<label htmlFor="ownerIDSelected">Owners ID</label>
				<input
					id="ownerIDSelected"
					name="ownerIDSelected"
					type="text"
					required
					value={selectedOwnerId || ""}
					readOnly
				/>
			</p>
			<p>
				<label htmlFor="ownerName">Owners Name</label>
				<input
					id="ownerName"
					name="ownerName"
					type="text"
					value={selectedOwnerName || ""}
					readOnly
				/>
			</p>
			<p>
				<label htmlFor="ownerPhoneNumber1">Phone Number 1</label>
				<input
					id="ownerPhoneNumber1"
					name="ownerPhoneNumber1"
					type="text"
					value={selectedOwnerPhoneNumber1 || ""}
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
		owner: data.get("ownerID"),
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
