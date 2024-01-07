import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import DrawerLayout from "../DrawerLayout/DrawerLayout";

import styles from "./MainNavigation.module.css";
import LinkDropdown from "../LinkDropDowns/LinkDropdown";
import { getUser } from "../../../util/auth";

const title = import.meta.env.VITE_TITLE;

const MainNavigation = () => {
	const token = useRouteLoaderData("root");

	const { name: userName } = getUser();

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
				userName={userName}
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
							{token && <li>Welcome, {userName} </li>}
							{!token && (
								<li>
									<NavLink
										to="/auth"
										className={({ isActive }) =>
											isActive ? styles.active : undefined
										}
										end
									>
										Authentication
									</NavLink>
								</li>
							)}
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
							{!token && (
								<li>
									<NavLink
										to="/auth?mode=login"
										className={({ isActive }) =>
											isActive ? styles.active : undefined
										}
									>
										Log In
									</NavLink>
								</li>
							)}
							{token && (
								<li className={styles.lilogoutForm}>
									<Form
										className={styles.logoutForm}
										action="/logout"
										method="post"
									>
										<button className={styles.logoutButton}>
											Log Out
										</button>
									</Form>
								</li>
							)}
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
