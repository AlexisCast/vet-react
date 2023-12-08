import Drawer from "../Drawer/Drawer";

import styles from "./DrawerLayout.module.css";

const DrawerLayout = ({ showDrawer, setShowDrawer }) => {
	// const drawerIsVisbile = useSelector((state) => state.ui.drawerIsVisbile);
	// const dispatch = useDispatch();

	const toggleDrawer = () => {
		setShowDrawer(false);
	};

	return (
		<Drawer isOpen={showDrawer} onClose={toggleDrawer}>
			<div className={styles.Drawer__container}>
				<p>Drawer Header</p>
				<nav className={styles.Drawer__nav}>
					<ul className={styles.mobileNav}>
						<li>All Users</li>
						<li>All Products</li>
						<li>All Categories</li>
						<li>Welcome, User </li>
						<li>Log In</li>
						<li>Log Out</li>
					</ul>
				</nav>
			</div>
		</Drawer>
	);
};

export default DrawerLayout;
