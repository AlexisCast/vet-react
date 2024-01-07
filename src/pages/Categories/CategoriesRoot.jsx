import { Outlet } from "react-router-dom";
import CategoriesNavigation from "../../components/CategoriesNavigation/CategoriesNavigation";

const CategoriesRootLayout = () => {
	return (
		<>
			<CategoriesNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default CategoriesRootLayout;
