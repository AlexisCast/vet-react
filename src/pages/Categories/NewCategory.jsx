import { json, redirect } from "react-router-dom";

import CategoryForm from "../../components/CategoryForm/CategoryForm";

import { getAuthToken } from "../../../util/auth";

const NewCategory = () => {
	return (
		<div>
			<h1>NewCategory</h1>
			<CategoryForm />
		</div>
	);
};

export default NewCategory;

export const action = async ({ request }) => {
	const data = await request.formData();

	const eventData = {
		name: data.get("title"),
	};

	const token = getAuthToken();

	const response = await fetch("http://localhost:8080/api/categories", {
		method: "POST",
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
