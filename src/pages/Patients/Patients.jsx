import { useEffect, useState } from "react";
import { Link, useLoaderData, json } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toastActions } from "../../store/toasts-slice";

import PatientsList from "../../components/PatientsList/PatientsList";
import InputSearch from "../../components/InputSearch/InputSearch";

import { getAuthToken } from "../../../util/auth";

import userService from "../../services/userService";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Patients = () => {
	const data = useLoaderData();
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		setSearchResults([]);
	}, [inputValue]);

	const fetchSearchResults = async (query) => {
		try {
			setIsloading(true);
			const response = await userService.getPatientsPhrase(query);
			console.log(response);
			setSearchResults(response.results);
			setIsloading(false);
		} catch (error) {
			console.error("Error fetching search results:", error);
			setSearchResults([]);
			dispatch(
				toastActions.showToast({
					message: `Error fetching search results: ${error}`,
					type: "failure",
				})
			);
		} finally {
			setIsloading(false);
		}
	};

	if (data.isError) {
		return <p>{data.msg}</p>;
	}

	let patients = inputValue !== "" ? searchResults : data.patients;

	return (
		<div>
			<h1>Patients </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<div style={{ textAlign: "center" }}></div>
			<div>
				<InputSearch
					labelText="Search"
					inputValue={inputValue}
					setInputValue={setInputValue}
					onInputChange={fetchSearchResults}
					inputPlaceHolder="Search Patient..."
				/>
			</div>
			{inputValue != "" && isLoading && <>Loading</>}
			{inputValue != "" && !isLoading && searchResults.length >= 0 && (
				<p>Results:</p>
			)}
			<PatientsList patients={patients} />
		</div>
	);
};

export default Patients;

export const loader = async () => {
	console.log("Patients");

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/patients", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch patients..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};
