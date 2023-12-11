import { Outlet } from "react-router-dom";
import ProductsNavigation from "../components/ProductsNavigation/ProductsNavigation";


const ProductsRootLayout = () => {
	return (
		<>
			<ProductsNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default ProductsRootLayout;
