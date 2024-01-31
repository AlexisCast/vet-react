import { Outlet } from "react-router-dom";
import PatientsNavigation from "../../components/PatientsNavigation/PatientsNavigation";

const PatientsRootLayout = () => {
	return (
		<>
			<PatientsNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default PatientsRootLayout;
