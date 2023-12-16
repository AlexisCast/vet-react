import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";

function AuthenticationPage() {
	return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get("mode") || "signup";

	if (mode !== "login" && mode !== "signup") {
		throw json({ msg: "Unsupported mode. " }, { status: 422 });
	}

	const data = await request.formData();

	if (mode === "login") {
		const authData = {
			email: data.get("email"),
			password: data.get("password"),
		};

		const response = await fetch("http://localhost:8080/api/auth/" + mode, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});

		if (!response.ok) {
			return response;
		} else {
			console.log(await response.json());
			return redirect("/");
		}
	} else {
		const authData = {
			email: data.get("email"),
			password: data.get("password"),
			name: data.get("name"),
			role: "SALES_ROLE",
		};

		const response = await fetch("http://localhost:8080/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});

		if (!response.ok) {
			return response;
		} else {
			console.log(await response.json());
			return redirect("/");
		}
	}
};
