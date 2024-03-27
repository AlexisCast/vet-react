import { NavLink, useRouteLoaderData } from "react-router-dom";

import styles from "./PatientsNavigation.module.css";

const PatientsNavigation = () => {
	const token = useRouteLoaderData("root");

	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
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
