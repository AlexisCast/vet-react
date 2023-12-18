import { Form, useActionData, useNavigate } from "react-router-dom";

import styles from "./CategoryForm.module.css";

const CategoryForm = ({ method, category }) => {
	const data = useActionData();
	console.log("data CategoryForm");
	console.log(data);

	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

	return (
		<Form method="post" className={styles.form}>
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
					defaultValue={category ? category.name : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Category ID</label>
				<input
					id="category"
					type="text"
					name="category"
					// required
					defaultValue={category ? category._id : ""}
				/>
			</p>
			<div className={styles.actions}>
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button>Save</button>
			</div>
		</Form>
	);
};

export default CategoryForm;
