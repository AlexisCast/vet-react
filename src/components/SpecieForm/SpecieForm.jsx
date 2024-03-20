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

import styles from "./SpecieForm.module.css";

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
				<RequiredLabel htmlFor="name" required>
					Name
				</RequiredLabel>
				<input
					id="name"
					name="name"
					type="text"
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
