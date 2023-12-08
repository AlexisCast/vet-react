import ReactDOM from "react-dom";

import styles from "./Drawer.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose} />;
};

const DrawerOverlay = ({ children }) => {
	return <div className={styles.container__drawer}>{children}</div>;
};

export const Drawer = ({ isOpen = false, onClose, children }) => {
	if (!isOpen) return null;

	console.log("123");
	const backdropRoot = document.getElementById("backdrop-root");
	const portalRoot = document.getElementById("portal-root");

	if (!portalRoot || !backdropRoot) return null;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={onClose} />,
				backdropRoot
			)}

			{ReactDOM.createPortal(
				<DrawerOverlay>{children}</DrawerOverlay>,
				portalRoot
			)}
		</>
	);
};

export default Drawer;
