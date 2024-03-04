import { useState } from "react";

import styles from "./Dropdown.module.css";

const Dropdown = ({ options, onSelect, selectedOptionDefault = "null" }) => {
	const [selectedOption, setSelectedOption] = useState(selectedOptionDefault);

	const handleSelect = (option) => {
		setSelectedOption(option);
		onSelect(option);
	};

	return (
		<select
			className={styles.dropdown}
			value={selectedOption}
			onChange={(e) => handleSelect(e.target.value)}
		>
			<option value="">Select an option</option>
			{options.map((option, index) => (
				<option key={index} value={`${option.id}`}>
					{`${option.option}`}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
