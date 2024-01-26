import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
	json,
	redirect,
} from "react-router-dom";

import styles from "./OwnerForm.module.css";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

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
				<label htmlFor="title">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					required
					defaultValue={owner ? name : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Last Name</label>
				<input
					id="lastName"
					type="text"
					name="lastName"
					required
					defaultValue={owner ? lastName : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Email</label>
				<input
					id="email"
					type="text"
					name="email"
					// required
					defaultValue={owner ? email : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Address</label>
				<input
					id="address"
					type="text"
					name="address"
					// required
					defaultValue={owner ? address : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Other</label>
				<input
					id="other"
					type="text"
					name="other"
					// required
					defaultValue={owner ? other : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Phone Number 1</label>
				<input
					id="phoneNumber1"
					type="text"
					name="phoneNumber1"
					required
					defaultValue={owner ? phoneNumber1 : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Phone Number 2</label>
				<input
					id="phoneNumber2"
					type="text"
					name="phoneNumber2"
					// required
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
