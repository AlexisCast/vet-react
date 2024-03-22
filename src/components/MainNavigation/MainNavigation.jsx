import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import DrawerLayout from "../DrawerLayout/DrawerLayout";
import LinkDropdown from "../LinkDropDowns/LinkDropdown";

import { getUser } from "../../../util/auth";

import { BarsIcon } from "../Icons/Icons";

import styles from "./MainNavigation.module.css";

const title = import.meta.env.VITE_TITLE;

const MainNavigation = () => {
	const dispatch = useDispatch();

	const token = useRouteLoaderData("root");

	const { name: userName } = getUser();

	const [windowIsWide, setWindowIsWide] = useState(window.innerWidth > 1000);

	const updateState = () => {
		setWindowIsWide(window.innerWidth > 1000);
	};

	useEffect(() => {
		window.addEventListener("resize", updateState);
		console.log(windowIsWide);
	});

	const handleOnclick = () => {
		dispatch(uiActions.openDrawer());
	};

	return (
		<header>
			<DrawerLayout userName={userName} />
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
							<LinkDropdown label="Owners" route="/owners">
								<li>
									<Link to="/owners">All</Link>
								</li>
								<li>
									<Link to="/owners/new">New</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown label="Patients" route="/users">
								<li>
									<Link to="/patients">All</Link>
								</li>
								<li>
									<Link to="/patients/new">New</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown label="Species" route="/species">
								<li>
									<Link to="/species">All</Link>
								</li>
								<li>
									<Link to="/species/new">New</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown label="Records" route="/records">
								<li>
									<Link to="/records">All</Link>
								</li>
								<li>
									<Link to="/records/new">New</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown label="Products" route="/products">
								<li>
									<Link to="/products">All</Link>
								</li>
								<li>
									<Link to="/products/new">New</Link>
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
								<BarsIcon
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
