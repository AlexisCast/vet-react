import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
	json,
	redirect,
} from "react-router-dom";

import styles from "./CategoryForm.module.css";

import { getAuthToken } from "../../../util/auth";

const CategoryForm = ({ method, category }) => {
	const data = useActionData();
	console.log("data CategoryForm");
	console.log(data);

	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

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
					id="title"
					type="text"
					name="title"
					required
					defaultValue={category ? category.name : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Category ID</label>
				<input
					id="category"
					type="text"
					name="category"
					// required
					defaultValue={category ? category._id : ""}
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

export default CategoryForm;

export const action = async ({ request, params }) => {
	const method = request.method;

	const data = await request.formData();

	const eventData = {
		name: data.get("title"),
	};

	const token = getAuthToken();

	let url = "http://localhost:8080/api/categories";

	if (method === "PUT") {
		const eventId = params.categoryId;
		url = "http://localhost:8080/api/categories/" + eventId;
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
		// throw json({ msg: "Could not save category." }, { status: 500 });
		return response;
	}

	console.log(await response);

	return redirect("/categories");
};
