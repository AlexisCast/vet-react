import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
	json,
	redirect,
} from "react-router-dom";

import styles from "./SpecieForm.module.css";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;

const SpecieForm = ({ method, specie }) => {
	const data = useActionData();

	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

	const { _id, name } = specie;

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
					defaultValue={specie ? name : ""}
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

export default SpecieForm;

export const action = async ({ request, params }) => {
	const method = request.method;

	const data = await request.formData();

	const eventData = {
		name: data.get("name"),
	};

	const token = getAuthToken();

	let url = `${client_url}/api/species`;

	if (method === "PUT") {
		const eventId = params.specieId;
		url = `${client_url}/api/species/${eventId}`;
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
		return response;
	}

	console.log(await response);

	return redirect("/species");
};
