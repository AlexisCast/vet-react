import {
	SuccessIcon,
	FailureIcon,
	WarningIcon,
	CloseIcon,
	InfoIcon,
} from "../Icons/Icons";

import styles from "./Toast.module.css";

const Toast = ({ message, type, onClose }) => {
	const iconMap = {
		success: <SuccessIcon size="lg" iconColor="white" />,
		failure: <FailureIcon size="lg" iconColor="white" />,
		warning: <WarningIcon size="lg" iconColor="white" />,
		info: <InfoIcon size="lg" iconColor="white" />,
	};

	const toastIcon = iconMap[type] || null;

	return (
		<div
			className={`${styles.toast} ${styles[`toast--${type}`]}`}
			role="alert"
		>
			<div className={styles["toast_message"]}>
				{toastIcon && (
					<div className={`${styles.toast_icon_container}`}>
						{toastIcon}
					</div>
				)}
				<p>{message}</p>
			</div>
			<button className={styles["toast-close-btn"]} onClick={onClose}>
				<span>
					<CloseIcon iconColor="#c7c7c7" size="2xl" />
				</span>
			</button>
		</div>
	);
};

export default Toast;
