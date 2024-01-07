import { Form, Link, useSearchParams, useActionData } from "react-router-dom";

import styles from "./AuthForm.module.css";

function AuthForm() {
	const data = useActionData();

	console.log("data");
	console.log(data);
	const [searchParams, setSearchParams] = useSearchParams();
	const isLogin = searchParams.get("mode") === "login";

	return (
		<>
			<Form method="post" className={styles.form}>
				<h1>{isLogin ? "Log in" : "Create a new user"}</h1>
				{data && data.msg && (
					<ul>
						<li key={data.msg}>{data.msg}</li>
					</ul>
				)}
				{/*
				//TODO this should be uncomment when creating new user & need to be fixed frontend and backend
        
        {data && data.errors && (
					<ul>
						{data.errors.map((err, i) => (
							<li key={i}>{err.msg}</li>
						))}
					</ul>
				)} */}
				{!isLogin && (
					<p>
						<label htmlFor="email">Name</label>
						<input id="name" type="text" name="name" required />
					</p>
				)}
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" required />
				</p>
				<p>
					<label htmlFor="image">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						required
					/>
				</p>
				<div className={styles.actions}>
					<Link to={`?mode=${isLogin ? "signup" : "login"}`}>
						{isLogin ? "Create new user" : "Login"}
					</Link>
					<button>Save</button>
				</div>
			</Form>
		</>
	);
}

export default AuthForm;
