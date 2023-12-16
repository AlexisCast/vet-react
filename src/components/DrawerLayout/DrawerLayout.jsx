import { Link, NavLink } from "react-router-dom";

import Drawer from "../Drawer/Drawer";

import styles from "./DrawerLayout.module.css";
import Accordion, { AccordionItem } from "../Accordion/Accordion";

const DrawerLayout = ({ showDrawer, setShowDrawer }) => {
	// const drawerIsVisbile = useSelector((state) => state.ui.drawerIsVisbile);
	// const dispatch = useDispatch();

	const toggleDrawer = () => {
		setShowDrawer(false);
	};

	//TODO: refactor for toggleDrawer

	return (
		<Drawer isOpen={showDrawer} onClose={toggleDrawer}>
			<div className={styles.Drawer__container}>
				<p>Drawer Header</p>
				<nav className={styles.Drawer__nav}>
					<ul className={styles.mobileNav}>
						<li onClick={toggleDrawer}>
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
							<Accordion title="Users" closeDrawer={toggleDrawer}>
								<AccordionItem route="/users" label="All" />
								<AccordionItem route="/users" label="New" />
								<AccordionItem route="/users" label="Update" />
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
						<li onClick={toggleDrawer}>Welcome, User </li>
						<li onClick={toggleDrawer}>Log In</li>
						<li onClick={toggleDrawer}>Log Out</li>
					</ul>
				</nav>
			</div>
		</Drawer>
	);
};

export default DrawerLayout;
