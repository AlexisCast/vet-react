import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products/Products";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage, {
	loader as productDetailLoader,
} from "./pages/Products/ProductDetail";
import NewProduct from "./pages/Products/NewProduct";
import EditProduct from "./pages/Products/EditProduct";
import ProductsRootLayout from "./pages/Products/ProductsRoot";
import AuthenticationPage, {
	action as authAction,
} from "./pages/Authentication";

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
						id: "product-detail",
						loader: productDetailLoader,
						children: [
							{
								index: true,
								element: <ProductDetailPage />,
							},
							{
								path: "edit",
								element: <EditProduct />,
							},
						],
					},
					{
						path: "new",
						element: <NewProduct />,
					},
				],
			},
			{
				path: "auth",
				element: <AuthenticationPage />,
				action: authAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
