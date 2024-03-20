import { useState } from "react";

import styles from "./Dropdown.module.css";

const Dropdown = ({
	options,
	onSelect,
	selectedOptionDefault = "null",
	text = "Select an Option",
	name = "",
	...props
}) => {
	const [selectedOption, setSelectedOption] = useState(selectedOptionDefault);

	const handleSelect = (option) => {
		setSelectedOption(option);
		onSelect(option);
	};

	return (
		<select
			name={name}
			className={styles.dropdown}
			value={selectedOption}
			onChange={(e) => handleSelect(e.target.value)}
			{...props}
		>
			<option value="">{text}</option>
			{options.map((option, index) => (
				<option key={index} value={`${option.id}`}>
					{`${option.option}`}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
