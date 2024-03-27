import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./CategoriesNavigation.module.css";

const CategoriesNavigation = () => {
	const token = useRouteLoaderData("root");

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					{token && (
						<>
							<li>
								<NavLink to="/patients">Patients</NavLink>
							</li>
							<li>
								<NavLink to="/owners">Owners</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default CategoriesNavigation;
