import ReactDOM from "react-dom";

import styles from "./Portal.module.css";

const PortalOverlay = ({ children }) => {
	return <div className={styles.container__drawer}>{children}</div>;
};

export const Portal = ({ isOpen = true, children }) => {
	if (!isOpen) return null;

	const whatsAppRoot = document.getElementById("whatsApp-root");

	if (!whatsAppRoot) return null;

	return (
		<>
			{ReactDOM.createPortal(
				<PortalOverlay>{children}</PortalOverlay>,
				whatsAppRoot
			)}
		</>
	);
};

export default Portal;
