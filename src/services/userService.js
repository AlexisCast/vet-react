import { json } from "react-router-dom";
import { getAuthToken, isTokenExpired } from "../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;
const OWNERS_URL = "/api/owners";
const SPECIES_URL = "/api/species";
const PATIENTS_URL = "/api/patients";
const RECORDS_URL = "/api/records";

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

async function postMedicalRecord(data) {
	const token = getAuthToken();
	const response = await fetch(client_url + RECORDS_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const responseData = await response.clone().json();
		throw new Error(responseData.msg);
	}

	return await response.json();
}

const functions = {
	getAllOwners,
	getAllPatients,
	getAllSpecies,
	getSpecieById,
	postMedicalRecord,
};

export default functions;
