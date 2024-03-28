import { useEffect, useState } from "react";
import { useLoaderData, json, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toastActions } from "../../store/toasts-slice";

import OwnersList from "../../components/OwnersList/OwnersList";
import OwnersTable from "../../components/OwnersTable/OwnersTable";
import InputSearch from "../../components/InputSearch/InputSearch";

import { getAuthToken } from "../../../util/auth";
import userService from "../../services/userService";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Owners = () => {
	const data = useLoaderData();
	const dispatch = useDispatch();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const stateValue = queryParams.get("state");

	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState({
		total: 0,
		owners: [],
	});

	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		setSearchResults({
			total: 0,
			owners: [],
		});
	}, [inputValue]);

	const fetchSearchResults = async (query) => {
		try {
			setIsloading(true);
			const response = await userService.getOwnersPhrase(query);
			console.log(response);
			setSearchResults({
				total: response.results.length,
				owners: response.results,
			});
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

	console.log("data");
	console.log(data);

	if (data.isError) {
		return <p>{data.msg}</p>;
	}

	let ownersData = inputValue !== "" ? searchResults : data;

	return (
		<div>
			<h1>{stateValue && "Deleted "}Owners </h1>
			<div>
				<InputSearch
					labelText="Search"
					inputValue={inputValue}
					setInputValue={setInputValue}
					onInputChange={fetchSearchResults}
					inputPlaceHolder="Search by First, Last Name or Number..."
				/>
			</div>
			{inputValue != "" && isLoading && <>Loading</>}
			{inputValue !== "" && !isLoading && searchResults.total >= 0 && (
				<p>Results:</p>
			)}
			{/* <OwnersList owners={ownersData.owners} /> */}
			<OwnersTable tableRecordsData={ownersData} />
		</div>
	);
};

export default Owners;

export const loader = async ({ request, params }) => {
	console.log("Owners");

	const url = new URL(request.url);
	const queryParams = url.searchParams;
	const limit = queryParams.get("limit");
	const from = queryParams.get("from");
	const state = queryParams.get("state");
	let ownersPagedPath = "";

	const token = getAuthToken();

	if (limit) {
		ownersPagedPath = `?limit=${limit}&from=${from}`;
		if (state) {
			ownersPagedPath += `&state=${state}`; // Corrected concatenation
		}
	} else if (!limit && state) {
		ownersPagedPath += `?state=${state}`; // Corrected concatenation
	}

	console.log("ownersPagedPath");
	console.log(ownersPagedPath);

	const response = await fetch(client_url + "/api/owners" + ownersPagedPath, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch owners..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};
