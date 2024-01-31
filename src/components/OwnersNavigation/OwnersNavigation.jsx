import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./OwnersNavigation.module.css";

const OwnersNavigation = () => {
	const token = useRouteLoaderData("root");

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Categories</NavLink>
					</li>
					<li>
						<NavLink to="/patients">Patients</NavLink>
					</li>
					{token && (
						<li>
							<NavLink to="/owners/new">New Owner</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default OwnersNavigation;
