import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./PatientsNavigation.module.css";

const PatientsNavigation = () => {
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
					{token && (
						<>
							<li>
								<NavLink to="/owners">Owners</NavLink>
							</li>
							<li>
								<NavLink to="/owners/new">New Owner</NavLink>
							</li>
							<li>
								<NavLink to="/patients">Patients</NavLink>
							</li>
							<li>
								<NavLink to="/patients/new">
									New Patient
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default PatientsNavigation;
