import { useEffect, useState } from "react";

import styles from "./NavBar.module.css";
import DrawerLayout from "../DrawerLayout/DrawerLayout";

const NavBar = () => {
	const [windowIsWide, setWindowIsWide] = useState(window.innerWidth > 1000);
	const [showDrawer, setShowDrawer] = useState(false);

	const updateState = () => {
		setWindowIsWide(window.innerWidth > 1000);
	};

	useEffect(() => {
		window.addEventListener("resize", updateState);
		console.log(windowIsWide);
	});

	const handleOnclick = () => {
		setShowDrawer(true);
	};

	return (
		<header>
			<DrawerLayout
				showDrawer={showDrawer}
				setShowDrawer={setShowDrawer}
			/>
			<nav>
				{windowIsWide ? (
					<>
						<ul className={styles.webNav}>
							<li>All Users</li>
							<li>All Products</li>
							<li>All Categories</li>
							<li>Welcome, User </li>
							<li>Log In</li>
							<li>Log Out</li>
						</ul>
					</>
				) : (
					<>
						<ul className={styles.webNav}>
							<li>
								<button onClick={handleOnclick}>icon</button>
							</li>
						</ul>
					</>
				)}
			</nav>
		</header>
	);
};

export default NavBar;
