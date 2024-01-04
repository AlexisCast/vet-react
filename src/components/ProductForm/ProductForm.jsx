import { useState } from "react";
import {
	Form,
	redirect,
	useActionData,
	useNavigate,
	useNavigation,
} from "react-router-dom";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

import noImage from "../../assets/no-image.jpg";

import styles from "./ProductForm.module.css";

const ProductForm = ({ method, product }) => {
	const [image, setImage] = useState(product ? product.image : null);
	const [previewUrl, setPreviewUrl] = useState(
		product ? product.image : null
	);

	const data = useActionData();
	console.log("data ProductForm");
	console.log(data);

	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const navigate = useNavigate();

	const cancelHandler = () => {
		navigate("..");
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		// Set the selected file in state
		setImage(file);

		// Show image preview
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setPreviewUrl(null);
		}
	};

	return (
		<Form
			method={method}
			className={styles.form}
			encType="multipart/form-data"
		>
			{data && data.msg && (
				<ul>
					<li key={data.msg}>{data.msg}</li>
				</ul>
			)}
			<p>
				<label htmlFor="title">Name</label>
				<input
					id="title"
					type="text"
					name="title"
					required
					defaultValue={product ? product.name : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="url"
					name="image"
					// required
					defaultValue={product ? product.img : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Current Image</label>
				{product.img ? (
					<img src={product.img} alt={product.name} />
				) : (
					<img src={noImage} alt="noImage" />
				)}
				{/* Change input type to file */}
				<input
					id="file"
					type="file"
					name="file"
					onChange={handleImageChange}
					required={!product}
				/>
			</p>
			{previewUrl && (
				<img
					src={previewUrl}
					alt="Preview"
					style={{ maxWidth: "100%", maxHeight: "200px" }}
				/>
			)}
			<p>
				<label htmlFor="date">Available</label>
				<input
					id="available"
					type="text"
					name="available"
					// required
					defaultValue={product ? product.available : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Category Name</label>
				<input
					id="category"
					type="text"
					name="category"
					required
					defaultValue={product ? product.category.name : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Category ID</label>
				<input
					id="categoryId"
					type="text"
					name="categoryId"
					required
					defaultValue={product ? product.category._id : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Price</label>
				<input
					id="price"
					type="text"
					name="price"
					required
					defaultValue={product ? product.price : ""}
				/>
			</p>

			<div className={styles.actions}>
				<button
					disabled={isSubmitting}
					type="button"
					onClick={cancelHandler}
				>
					Cancel
				</button>
				<button disabled={isSubmitting}>
					{isSubmitting ? "... Submitting" : "Save"}
				</button>
			</div>
		</Form>
	);
};

export default ProductForm;

export const action = async ({ request, params }) => {
	const method = request.method;

	// Get form data
	const data = await request.formData();

	// Extract relevant data from form
	const eventData = {
		name: data.get("title"),
		category: data.get("categoryId"),
		price: data.get("price"),
		file: data.get("file"),
	};

	console.log("eventData");
	console.log(eventData);

	// Get authentication token
	const token = getAuthToken();

	// Set API endpoint URL based on request method
	let url = "http://localhost:8080/api/products";
	if (method === "PUT") {
		const productId = params.productId;
		url = `http://localhost:8080/api/products/${productId}`;
	}

	// Set up fetch options
	const fetchOptions = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	};

	if (method === "PUT" || method === "POST") {
		// Add body for PUT and POST requests
		fetchOptions.body = JSON.stringify(eventData);
	}

	// Make the API request
	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		// Handle errors
		const responseData = await response.clone().json();
		isTokenExpired(responseData?.msg);
		return response;
	} else {
		// Handle success
		const responseData = await response.clone().json();
		const { _id } = responseData;

		// If it's a PUT or POST request and there's a file, update the image separately
		if (
			(method === "PUT" || method === "POST") &&
			eventData.file.size > 0
		) {
			// Determine productId based on method
			const productId = method === "POST" ? _id : params.productId;

			const urlToUpdateImage = `http://localhost:8080/api/uploads/products/${productId}`;

			// Set up formData for image update
			const formData = new FormData();
			formData.append("file", eventData.file);

			// Make the image update request
			const imageUpdateResponse = await fetch(urlToUpdateImage, {
				method: "PUT",
				headers: {
					"x-token": token,
				},
				body: formData,
			});

			if (!imageUpdateResponse.ok) {
				// Handle image update errors
				const responseData = await imageUpdateResponse.clone().json();
				isTokenExpired(responseData?.msg);
				return imageUpdateResponse;
			}
		}
	}

	// Redirect to "/products" after successful request
	return redirect("/products");
};
