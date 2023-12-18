import { NavLink } from "react-router-dom";

import classes from "./CategoriesNavigation.module.css";

const CategoriesNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink href="/categories">All Categories</NavLink>
					</li>
					<li>
						<NavLink href="/categories/new">New Category</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default CategoriesNavigation;
