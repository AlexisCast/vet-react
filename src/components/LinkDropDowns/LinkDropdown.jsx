import { useState } from "react";

import { CaretDownIcon } from "../Icons/Icons";

import styles from "./LinkDropdown.module.css";

const LinkDropdown = ({ label, route, children }) => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleSubMenu = () => {
		setShowSubMenu(false);
	};

	const handleLinkClick = () => {
		setShowSubMenu(!showSubMenu);
	};

	return (
		<li
			className={styles.dropdown}
			onClick={handleLinkClick}
			onMouseLeave={toggleSubMenu}
		>
			<div to={route} style={{ width: "100%", textAlign: "center" }}>
				{label}
				<span style={{ marginLeft: "5px" }}>
					<CaretDownIcon size="sm" />
				</span>
			</div>
			<ul
				className={`${styles.dropdownContent} ${
					showSubMenu ? styles.show : ""
				}`}
			>
				{children}
			</ul>
		</li>
	);
};

export default LinkDropdown;
