import { Link } from "react-router-dom";

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
							<Link to="/">Home</Link>
						</li>
						<li>
							<Accordion title="Users" closeDrawer={toggleDrawer}>
								<AccordionItem route="/" label="All Users" />
								<AccordionItem
									route="/users/jiz"
									label="Users jiz"
								/>
								<AccordionItem
									route="/users/baz"
									label="Users baz"
								/>
								<AccordionItem
									route="/users/bar"
									label="Users bar"
								/>
								<AccordionItem
									route="/users/foo"
									label="Users foo"
								/>
							</Accordion>
						</li>
						<li>
							<Accordion
								title="Products"
								closeDrawer={toggleDrawer}
							>
								<AccordionItem
									route="/products"
									label="All Products"
								/>
								<AccordionItem
									route="/products/jiz"
									label="Products jiz"
								/>
								<AccordionItem
									route="/products/baz"
									label="Products baz"
								/>
								<AccordionItem
									route="/products/bar"
									label="Products bar"
								/>
								<AccordionItem
									route="/products/foo"
									label="Products foo"
								/>
							</Accordion>
						</li>
						<li onClick={toggleDrawer}>All Categories</li>
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
