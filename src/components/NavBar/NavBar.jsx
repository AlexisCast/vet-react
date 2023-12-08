import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.css";
import DrawerLayout from "../DrawerLayout/DrawerLayout";

const title = import.meta.env.VITE_TITLE;

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
					<ul className={styles.navContainer}>
						<ul className={styles.webNav}>
							<li>{title}</li>
						</ul>
						<ul className={styles.webNav}>
							<li>All Users</li>
							<li>All Products</li>
							<li>All Categories</li>
							<li>Welcome, User </li>
							<li>Log In</li>
							<li>Log Out</li>
						</ul>
					</ul>
				) : (
					<ul className={styles.navContainer}>
						<ul className={styles.webNav}>
							<li>{title}</li>
						</ul>
						<ul className={styles.webNav}>
							<li onClick={handleOnclick}>
								<FontAwesomeIcon
									icon={faBars}
									size="xl"
									className={styles.faBars}
								/>
							</li>
						</ul>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default NavBar;
