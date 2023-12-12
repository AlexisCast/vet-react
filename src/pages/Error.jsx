import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation/MainNavigation";

const ErrorPage = () => {
	const error = useRouteError();

	let message = "Something went wrong!";

	if (error.status === 500) {
		message = JSON.parse(error.data).msg;
	}

	if (error.status === 404) {
		message = "Could not find resource or page";
	}

	return (
		<>
			<MainNavigation />
			<main>
				<h1>An Error occured!</h1>
				<p>{message}</p>
			</main>
		</>
	);
};

export default ErrorPage;
