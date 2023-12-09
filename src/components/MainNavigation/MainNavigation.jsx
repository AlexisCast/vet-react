import { Link } from "react-router-dom";
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
								<Link to="/">Home</Link>
							</li>
							<LinkDropdown label="Users" route="/users">
								<li>
									<Link to="/">Users jiz</Link>
								</li>
								<li>
									<Link to="/users/baz">Users baz</Link>
								</li>
								<li>
									<Link to="/products/bar">Users bar</Link>
								</li>
								<li>
									<Link to="/users/foo">
										users fooasdf fsd
									</Link>
								</li>
							</LinkDropdown>
							<LinkDropdown label="Products" route="/products">
								<li>
									<Link to="/products/jiz">Products jiz</Link>
								</li>
								<li>
									<Link to="/products">Products baz</Link>
								</li>
								<li>
									<Link to="/products/bar">Products bar</Link>
								</li>
								<li>
									<Link to="/products/foo">
										Products fooasdf fsd
									</Link>
								</li>
							</LinkDropdown>
							<li>All Categories</li>
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
