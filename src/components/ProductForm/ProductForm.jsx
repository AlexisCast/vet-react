import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ProductForm.module.css";

const ProductForm = ({ method, product }) => {
	const [image, setImage] = useState(product ? product.image : null);
	const [previewUrl, setPreviewUrl] = useState(
		product ? product.image : null
	);

	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

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

	const handleSubmit = (e) => {
		e.preventDefault();

		// Your form submission logic, including handling the uploaded image (if needed)
	};

	return (
		<form className={styles.form}>
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
					required
					defaultValue={product ? product.img : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<img src={product.img} alt={product.name} />
				{/* Change input type to file */}
				<input
					id="image"
					type="file"
					name="image"
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
					required
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
					id="category"
					type="text"
					name="category"
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
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button>Save</button>
			</div>
		</form>
	);
};

export default ProductForm;
