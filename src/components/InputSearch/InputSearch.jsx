import { useState } from "react";

import styles from "./InputSearch.module.css";

const InputSearch = ({
	labelText = "Search",
	inputValue,
	setInputValue,
	onInputChange,
	delay = 2000,
	inputPlaceHolder = "Type here...",
}) => {
	const [timer, setTimer] = useState(null);

	const handleChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);

		// Delay the fetch by clearing previous timeout and setting a new one
		clearTimeout(timer);
		const newTimer = setTimeout(() => {
			onInputChange(newValue);
		}, delay);
		setTimer(newTimer);
	};

	return (
		<div className={styles.inputSearch_container}>
			<label>{labelText}</label>
			<div className={styles.input_button_section}>
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					placeholder={inputPlaceHolder}
				/>
				<button onClick={() => setInputValue("")}>Clear</button>
			</div>
		</div>
	);
};

export default InputSearch;
