import styles from "./RequiredLabel.module.css";

const RequiredLabel = ({ htmlFor, children, required }) => {
	return (
		<label htmlFor={htmlFor}>
			{children}
			{required && <span className={styles.requiredColor}>*</span>}
		</label>
	);
};

export default RequiredLabel;
