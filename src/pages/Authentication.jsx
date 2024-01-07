import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";

import { setToken, setUser } from "../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;

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

		const response = await fetch(client_url + "/api/auth/" + mode, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});

		if (!response.ok) {
			return response;
		} else {
			const resData = await response.json();
			console.log(resData.user);
			const token = resData.token;
			const user = JSON.stringify(resData.user);

			setToken(token);
			setUser(user);

			return redirect("/");
		}
	} else {
		const authData = {
			email: data.get("email"),
			password: data.get("password"),
			name: data.get("name"),
			role: "SALES_ROLE",
		};

		const response = await fetch(client_url + "/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});

		if (!response.ok) {
			console.log(await response);
			return response;
			// throw json(
			// 	{
			// 		msg: "Could not auth user.",
			// 	},
			// 	{ status: 500 }
			// );
		} else {
			console.log(await response.json());
			return redirect("/");
		}
	}
};
