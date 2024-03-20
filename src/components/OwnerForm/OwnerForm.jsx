import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
	json,
	redirect,
} from "react-router-dom";

import RequiredLabel from "../RequiredLabel/RequiredLabel";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

import styles from "./OwnerForm.module.css";

const client_url = import.meta.env.VITE_CLIENT_URL;

const OwnerForm = ({ method, owner }) => {
	const data = useActionData();
	console.log("data OwnerForm");
	console.log(data);

	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

	const {
		_id,
		address,
		email,
		lastName,
		name,
		other,
		phoneNumber1,
		phoneNumber2,
	} = owner;

	return (
		<Form method={method} className={styles.form}>
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
					defaultValue={owner ? name : ""}
				/>
			</p>
			<p>
				<RequiredLabel htmlFor="lastName" required>
					Last Name
				</RequiredLabel>
				<input
					id="lastName"
					name="lastName"
					type="text"
					required
					defaultValue={owner ? lastName : ""}
				/>
			</p>
			<p>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					name="email"
					type="text"
					defaultValue={owner ? email : ""}
				/>
			</p>
			<p>
				<label htmlFor="address">Address</label>
				<input
					id="address"
					name="address"
					type="text"
					defaultValue={owner ? address : ""}
				/>
			</p>
			<p>
				<label htmlFor="other">Other</label>
				<input
					id="other"
					name="other"
					type="text"
					defaultValue={owner ? other : ""}
				/>
			</p>
			<p>
				<RequiredLabel htmlFor="phoneNumber1" required>
					Phone Number 1
				</RequiredLabel>
				<input
					id="phoneNumber1"
					name="phoneNumber1"
					type="text"
					required
					defaultValue={owner ? phoneNumber1 : ""}
				/>
			</p>
			<p>
				<label htmlFor="phoneNumber2">Phone Number 2</label>
				<input
					id="phoneNumber2"
					name="phoneNumber2"
					type="text"
					defaultValue={owner ? phoneNumber2 : ""}
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

export default OwnerForm;

export const action = async ({ request, params }) => {
	const method = request.method;

	const data = await request.formData();

	const eventData = {
		name: data.get("name"),
		lastName: data.get("lastName"),
		email: data.get("email"),
		address: data.get("address"),
		other: data.get("other"),
		phoneNumber1: data.get("phoneNumber1"),
		phoneNumber2: data.get("phoneNumber2"),
	};

	const token = getAuthToken();

	let url = `${client_url}/api/owners`;

	if (method === "PUT") {
		const eventId = params.ownerId;
		url = `${client_url}/api/owners/${eventId}`;
	}

	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
		body: JSON.stringify(eventData),
	});

	if (!response.ok) {
		const responseData = await response.clone().json();

		isTokenExpired(responseData?.msg);
		// throw json({ msg: "Could not save category." }, { status: 500 });
		return response;
	}

	console.log(await response);

	return redirect("/owners");
};
