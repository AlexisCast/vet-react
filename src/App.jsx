import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/products/:productId",
				element: <ProductDetailPage />,
			},
			{
				path: "/products/new",
				element: <NewProduct />,
			},
			{
				path: "/products/:productId/edit",
				element: <EditProduct />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
