import { NavLink, useRouteLoaderData } from "react-router-dom";

import styles from "./SpeciesNavigation.module.css";

const SpeciesNavigation = () => {
	const token = useRouteLoaderData("root");

	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
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

export default SpeciesNavigation;
