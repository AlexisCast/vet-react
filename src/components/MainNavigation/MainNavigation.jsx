import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import DrawerLayout from "../DrawerLayout/DrawerLayout";

import styles from "./MainNavigation.module.css";
import LinkDropdown from "../LinkDropDowns/LinkDropdown";

const title = import.meta.env.VITE_TITLE;

const MainNavigation = () => {
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
							<li>
								<Link to="/">{title}</Link>
							</li>
						</ul>
						<ul className={styles.webNav}>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? styles.active : undefined
									}
									end
								>
									Home
								</NavLink>
							</li>
							<LinkDropdown label="Users" route="/users">
								<li>
									<Link to="/users">All</Link>
								</li>
								<li>
									<Link to="/users">New</Link>
								</li>
								<li>
									<Link to="/products">Update</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown label="Products" route="/products">
								<li>
									<Link to="/products">All</Link>
								</li>
								<li>
									<Link to="/products/new">New</Link>
								</li>
								<li>
									<Link to="/products">Update</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown
								label="Categories"
								route="/categories"
							>
								<li>
									<Link to="/categories">All</Link>
								</li>
								<li>
									<Link to="/categories">New</Link>
								</li>
								<li>
									<Link to="/categories">Update</Link>
								</li>
							</LinkDropdown>
							<li>Welcome, User </li>
							<li>
								<Link to="/">Log In</Link>
							</li>
							<li>Log Out</li>
						</ul>
					</ul>
				) : (
					<ul className={styles.navContainer}>
						<ul className={`${styles.webNav} ${styles.noMinWidth}`}>
							<li>
								<Link to="/">{title}</Link>
							</li>
						</ul>
						<ul className={`${styles.webNav} ${styles.noMinWidth}`}>
							<li onClick={handleOnclick}>
								<FontAwesomeIcon
									icon={faBars}
									size="2xl"
									className={styles.faBars}
									onClick={handleOnclick}
								/>
							</li>
						</ul>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default MainNavigation;
