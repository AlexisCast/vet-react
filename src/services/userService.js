import { getAuthToken } from "../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;
const OWNERS_URL = "/api/owners";
const SPECIES_URL = "/api/species";
const PATIENTS_URL = "/api/patients";

function getAllOwners() {
	const token = getAuthToken();
	return fetch(client_url + OWNERS_URL, {
		headers: new Headers({
			"Content-Type": "application/json",
			"x-token": token,
		}),
	}).then((res) => res.json());
}

function getAllPatients() {
	const token = getAuthToken();
	return fetch(client_url + PATIENTS_URL, {
		headers: new Headers({
			"Content-Type": "application/json",
			"x-token": token,
		}),
	}).then((res) => res.json());
}

function getAllSpecies() {
	const token = getAuthToken();
	return fetch(client_url + SPECIES_URL, {
		headers: new Headers({
			"Content-Type": "application/json",
			"x-token": token,
		}),
	}).then((res) => res.json());
}

function getSpecieById(specieId) {
	const token = getAuthToken();
	return fetch(client_url + SPECIES_URL + "/" + specieId, {
		headers: new Headers({
			"Content-Type": "application/json",
			"x-token": token,
		}),
	}).then((res) => res.json());
}

const functions = {
	getAllOwners,
	getAllPatients,
	getAllSpecies,
	getSpecieById,
};

export default functions;
