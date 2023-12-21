import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products/Products";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage, {
	loader as productDetailLoader,
	action as deleteProductAction,
} from "./pages/Products/ProductDetail";
import NewProduct from "./pages/Products/NewProduct";
import EditProduct from "./pages/Products/EditProduct";
import ProductsRootLayout from "./pages/Products/ProductsRoot";
import AuthenticationPage, {
	action as authAction,
} from "./pages/Authentication";
import Categories, {
	loader as categoriesLoader,
} from "./pages/Categories/Categories";
import CategoriesRootLayout from "./pages/Categories/CategoriesRoot";
import CategoryDetailPage, {
	loader as categoryDetailLoader,
	action as deleteEventAction,
} from "./pages/Categories/CategoryDetail";
import EditCategory from "./pages/Categories/EditCategory";
import NewCategory from "./pages/Categories/NewCategory";

import { action as manipulateCategoryAction } from "./components/CategoryForm/CategoryForm";
import { action as manipulateProductAction } from "./components/ProductForm/ProductForm";

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
								action: deleteProductAction,
							},
							{
								path: "edit",
								element: <EditProduct />,
								action: manipulateProductAction,
							},
						],
					},
					{
						path: "new",
						element: <NewProduct />,
						action: manipulateProductAction,
					},
				],
			},
			{
				path: "categories",
				element: <CategoriesRootLayout />,
				children: [
					{
						index: true,
						element: <Categories />,
						loader: categoriesLoader,
					},
					{
						path: ":categoryId",
						id: "category-detail",
						loader: categoryDetailLoader,
						children: [
							{
								index: true,
								element: <CategoryDetailPage />,
								action: deleteEventAction,
							},
							{
								path: "edit",
								element: <EditCategory />,
								action: manipulateCategoryAction,
							},
						],
					},
					{
						path: "new",
						element: <NewCategory />,
						action: manipulateCategoryAction,
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
