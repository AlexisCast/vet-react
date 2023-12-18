import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CategoryForm.module.css";

const CategoryForm = ({ method, category }) => {
	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

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
					defaultValue={category ? category.name : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Category ID</label>
				<input
					id="category"
					type="text"
					name="category"
					required
					defaultValue={category ? category._id : ""}
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

export default CategoryForm;
