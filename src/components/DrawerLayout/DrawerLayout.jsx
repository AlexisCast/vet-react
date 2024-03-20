import {
	Link,
	NavLink,
	useNavigate,
	useRouteLoaderData,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Drawer from "../Drawer/Drawer";
import Accordion from "../Accordion/Accordion";

import { setToken } from "../../../util/auth";

import styles from "./DrawerLayout.module.css";

const DrawerLayout = ({ userName }) => {
	const token = useRouteLoaderData("root");

	const navigate = useNavigate();

	const dispatch = useDispatch();
	const drawerIsVisible = useSelector((state) => state.ui.drawerIsVisible);

	const toggleDrawer = () => {
		dispatch(uiActions.closeDrawer());
	};

	const toggleDrawerWithAction = () => {
		dispatch(uiActions.closeDrawer());
		setToken();
		navigate("/");
	};

	const toggleDrawerWithActionLogIn = () => {
		dispatch(uiActions.closeDrawer());
		setToken();
		navigate("/auth?mode=login");
	};

	//TODO: refactor for toggleDrawer

	return (
		<Drawer isOpen={drawerIsVisible} onClose={toggleDrawer}>
			<div className={styles.Drawer__container}>
				<p>Drawer Header</p>
				<nav className={styles.Drawer__nav}>
					<ul className={styles.mobileNav}>
						{token && (
							<li onClick={toggleDrawer}>Welcome, {userName} </li>
						)}
						<li onClick={toggleDrawer}>
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
						<li>
							<Accordion.Accordion
								title="Owners"
								closeDrawer={toggleDrawer}
							>
								<Accordion.AccordionItem
									route="/owners"
									label="All"
								/>
								<Accordion.AccordionItem
									route="/owners/new"
									label="New"
								/>
							</Accordion.Accordion>
						</li>
						<li>
							<Accordion.Accordion
								title="Patients"
								closeDrawer={toggleDrawer}
							>
								<Accordion.AccordionItem
									route="/patients"
									label="All"
								/>
								<Accordion.AccordionItem
									route="/patients/new"
									label="New"
								/>
							</Accordion.Accordion>
						</li>
						<li>
							<Accordion.Accordion
								title="Species"
								closeDrawer={toggleDrawer}
							>
								<Accordion.AccordionItem
									route="/species"
									label="All"
								/>
								<Accordion.AccordionItem
									route="/species/new"
									label="New"
								/>
							</Accordion.Accordion>
						</li>
						<li>
							<Accordion.Accordion
								title="Records"
								closeDrawer={toggleDrawer}
							>
								<Accordion.AccordionItem
									route="/records"
									label="All"
								/>
								<Accordion.AccordionItem
									route="/records/new"
									label="New"
								/>
							</Accordion.Accordion>
						</li>
						<li>
							<Accordion.Accordion
								title="Products"
								closeDrawer={toggleDrawer}
							>
								<Accordion.AccordionItem
									route="/products"
									label="All"
								/>
								<Accordion.AccordionItem
									route="/products/new"
									label="New"
								/>
								<Accordion.AccordionItem
									route="/products"
									label="Update"
								/>
							</Accordion.Accordion>
						</li>
						<li>
							<Accordion.Accordion
								title="Categories"
								closeDrawer={toggleDrawer}
							>
								<Accordion.AccordionItem
									route="/categories"
									label="All"
								/>
								<Accordion.AccordionItem
									route="/categories"
									label="New"
								/>
								<Accordion.AccordionItem
									route="/categories"
									label="Update"
								/>
							</Accordion.Accordion>
						</li>
						{!token && (
							<li onClick={toggleDrawerWithActionLogIn}>
								Log In
							</li>
						)}
						{token && (
							<li onClick={toggleDrawerWithAction}>Log Out</li>
						)}
					</ul>
				</nav>
			</div>
		</Drawer>
	);
};

export default DrawerLayout;
