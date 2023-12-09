import MainNavigation from "../components/MainNavigation/MainNavigation";

const ErrorPage = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<h1>An Error occured!</h1>
				<p>Could not find this page!</p>
			</main>
		</>
	);
};

export default ErrorPage;
