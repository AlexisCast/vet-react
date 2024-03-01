import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products/Products";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/Error";
import AuthenticationPage, {
	action as authAction,
} from "./pages/Authentication";

import ProductDetailPage, {
	loader as productDetailLoader,
	action as deleteProductAction,
} from "./pages/Products/ProductDetail";
import NewProduct from "./pages/Products/NewProduct";
import EditProduct from "./pages/Products/EditProduct";
import ProductsRootLayout from "./pages/Products/ProductsRoot";

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

import Owners, { loader as ownersLoader } from "./pages/Owners/Owners";
import OwnersRootLayout from "./pages/Owners/OwnerRoot";
import OwnerDetailPage, {
	loader as ownerDetailLoader,
	action as deleteOwnerAction,
} from "./pages/Owners/OwnerDetail";
import EditOwner from "./pages/Owners/EditOwner";
import NewOwner from "./pages/Owners/NewOwner";

import { action as manipulateCategoryAction } from "./components/CategoryForm/CategoryForm";
import { action as manipulateOwnerAction } from "./components/OwnerForm/OwnerForm";
import { action as manipulatePatientAction } from "./components/PatientForm/PatientForm";
import { action as manipulateProductAction } from "./components/ProductForm/ProductForm";
import { action as logoutAction } from "./pages/Logout";

import Patients, { loader as patientsLoader } from "./pages/Patients/Patients";
import PatientDetailPage, {
	loader as patientDetailLoader,
	action as deletePatientAction,
} from "./pages/Patients/PatientDetail";
import EditPatient from "./pages/Patients/EditPatient";
import NewPatient,{loader as newPatientLoader} from "./pages/Patients/NewPatient";

import { checkAuthLoader, tokenLoader } from "../util/auth";
import PatientsRootLayout from "./pages/Patients/PatientsRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: "root",
		loader: tokenLoader,
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
								loader: checkAuthLoader,
							},
						],
					},
					{
						path: "new",
						element: <NewProduct />,
						action: manipulateProductAction,
						loader: checkAuthLoader,
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
								loader: checkAuthLoader,
							},
						],
					},
					{
						path: "new",
						element: <NewCategory />,
						action: manipulateCategoryAction,
						loader: checkAuthLoader,
					},
				],
			},
			{
				path: "owners",
				element: <OwnersRootLayout />,
				children: [
					{
						index: true,
						element: <Owners />,
						loader: ownersLoader,
					},
					{
						path: ":ownerId",
						id: "owner-detail",
						loader: ownerDetailLoader,
						children: [
							{
								index: true,
								element: <OwnerDetailPage />,
								action: deleteOwnerAction,
							},
							{
								path: "edit",
								element: <EditOwner />,
								action: manipulateOwnerAction,
								loader: checkAuthLoader,
							},
						],
					},
					{
						path: "new",
						element: <NewOwner />,
						action: manipulateOwnerAction,
						loader: checkAuthLoader,
					},
				],
			},
			{
				path: "patients",
				element: <PatientsRootLayout />,
				children: [
					{
						index: true,
						element: <Patients />,
						loader: patientsLoader,
					},
					{
						path: ":patientId",
						id: "patient-detail",
						loader: patientDetailLoader,
						children: [
							{
								index: true,
								element: <PatientDetailPage />,
								action: deletePatientAction,
							},
							{
								path: "edit",
								element: <EditPatient />,
								action: manipulatePatientAction,
								loader: checkAuthLoader,
							},
						],
					},
					{
						path: "new",
						id: "new-patientData",
						element: <NewPatient />,
						action: manipulatePatientAction,
						loader: newPatientLoader,
					},
				],
			},
			{
				path: "auth",
				element: <AuthenticationPage />,
				action: authAction,
			},
			{
				path: "/logout",
				action: logoutAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
