import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage, {
	loader as productDetailLoader,
} from "./pages/ProductDetail";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import ProductsRootLayout from "./pages/ProductsRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "products",
				element: <ProductsRootLayout />,
				children: [
					{
						index: true,
						element: <Products />,
						loader: productsLoader,
					},
					{
						path: ":productId",
						element: <ProductDetailPage />,
						loader: productDetailLoader,
					},
					{
						path: "new",
						element: <NewProduct />,
					},
					{
						path: ":productId/edit",
						element: <EditProduct />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
