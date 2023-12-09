import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	//should use Link preferably
	const navigateHandler = () => {
		navigate("/products");
	};

	return (
		<div>
			<h1>HomePage</h1>
			<p>
				Go to <Link to="products">Products</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>Navigate</button>
			</p>
		</div>
	);
};

export default HomePage;
