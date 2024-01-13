import {
	Link,
	NavLink,
	useNavigate,
	useRouteLoaderData,
} from "react-router-dom";

import Drawer from "../Drawer/Drawer";

import styles from "./DrawerLayout.module.css";
import Accordion, { AccordionItem } from "../Accordion/Accordion";
import { setToken } from "../../../util/auth";

const DrawerLayout = ({ showDrawer, setShowDrawer, userName }) => {
	const token = useRouteLoaderData("root");

	const navigate = useNavigate();

	// const drawerIsVisbile = useSelector((state) => state.ui.drawerIsVisbile);
	// const dispatch = useDispatch();

	const toggleDrawer = () => {
		setShowDrawer(false);
	};

	const toggleDrawerWithAction = () => {
		setShowDrawer(false);
		setToken();
		navigate("/");
	};

	const toggleDrawerWithActionLogIn = () => {
		setShowDrawer(false);
		setToken();
		navigate("/auth?mode=login");
	};

	//TODO: refactor for toggleDrawer

	return (
		<Drawer isOpen={showDrawer} onClose={toggleDrawer}>
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
							<Accordion
								title="Owners"
								closeDrawer={toggleDrawer}
							>
								<AccordionItem route="/owners" label="All" />
								<AccordionItem
									route="/owners/new"
									label="New"
								/>
							</Accordion>
						</li>
						<li>
							<Accordion
								title="Patients"
								closeDrawer={toggleDrawer}
							>
								<AccordionItem route="/patients" label="All" />
								<AccordionItem
									route="/patients/new"
									label="New"
								/>
							</Accordion>
						</li>
						<li>
							<Accordion
								title="Products"
								closeDrawer={toggleDrawer}
							>
								<AccordionItem route="/products" label="All" />
								<AccordionItem
									route="/products/new"
									label="New"
								/>
								<AccordionItem
									route="/products"
									label="Update"
								/>
							</Accordion>
						</li>
						<li>
							<Accordion
								title="Categories"
								closeDrawer={toggleDrawer}
							>
								<AccordionItem
									route="/categories"
									label="All"
								/>
								<AccordionItem
									route="/categories"
									label="New"
								/>
								<AccordionItem
									route="/categories"
									label="Update"
								/>
							</Accordion>
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
