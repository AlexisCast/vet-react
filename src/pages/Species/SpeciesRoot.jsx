import { Outlet } from "react-router-dom";
import SpeciesNavigation from "../../components/SpeciesNavigation/SpeciesNavigation";

const SpeciesRootLayout = () => {
	return (
		<>
			<SpeciesNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default SpeciesRootLayout;
