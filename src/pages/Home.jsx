import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<p>
				Go to <Link to="/products">Products</Link>
			</p>
		</div>
	);
};

export default HomePage;
