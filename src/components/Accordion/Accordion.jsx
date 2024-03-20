import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./Accordion.module.css";

export const Accordion = ({ title, closeDrawer, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.Accordion_Container}>
			<>
				<div
					onClick={toggleAccordion}
					className={styles.AccordionButton__button}
				>
					<FontAwesomeIcon
						className={styles.faCaretDown}
						icon={faCaretDown}
						size="lg"
						onClick={toggleAccordion}
					/>
					<span>{title}</span>
				</div>
			</>

			{isOpen && (
				<div className={styles.Accordion__content}>
					<ul onClick={closeDrawer}>{children}</ul>
				</div>
			)}
		</div>
	);
};

export const AccordionItem = ({ route, label }) => {
	return (
		<li className={styles.AccordionItem}>
			<Link to={route}>{label} -</Link>
		</li>
	);
};

export default {
	Accordion,
	AccordionItem,
};
