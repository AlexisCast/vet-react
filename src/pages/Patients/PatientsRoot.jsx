import { Outlet } from "react-router-dom";
import OwnersNavigation from "../../components/OwnersNavigation/OwnersNavigation";

const PatientsRootLayout = () => {
	return (
		<>
			<OwnersNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default PatientsRootLayout;
