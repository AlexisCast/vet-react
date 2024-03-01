import { getAuthToken } from "../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;
const OWNERS_URL = "/api/owners";

function getAllOwners() {
	const token = getAuthToken();
	return fetch(client_url + OWNERS_URL, {
		headers: new Headers({
			"Content-Type": "application/json",
			"x-token": token,
		}),
	}).then((res) => res.json());
}

const functions = { getAllOwners };

export default functions;
