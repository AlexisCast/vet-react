import { Outlet } from "react-router-dom";
import OwnersNavigation from "../../components/OwnersNavigation/OwnersNavigation";

const OwnersRootLayout = () => {
	return (
		<>
			<OwnersNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default OwnersRootLayout;
