import ReactDOM from "react-dom";

import styles from "./Portal.module.css";

const PortalOverlay = ({ children }) => {
	return <div className={styles.container__drawer}>{children}</div>;
};

export const Portal = ({ isOpen = true, rootId, children }) => {
	if (!isOpen) return null;

	const rootNameId = document.getElementById(rootId);

	if (!rootNameId) return null;

	return (
		<>
			{ReactDOM.createPortal(
				<PortalOverlay>{children}</PortalOverlay>,
				rootNameId
			)}
		</>
	);
};

export default Portal;
