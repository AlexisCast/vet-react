import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { toastActions } from "../../store/toasts-slice";
import styles from "./Toasts.module.css";
import Toast from "../Toast/Toast";

const Toasts = () => {
	const dispatch = useDispatch();
	const { toasts, position, autoClose, autoCloseDuration } = useSelector(
		(state) => state.toasts
	);

	const timersRef = useRef({});

	useEffect(() => {
		// Clear all timers when component unmounts or when autoClose is toggled off
		if (!autoClose) {
			Object.values(timersRef.current).forEach((timer) =>
				clearTimeout(timer)
			);
		}
		return () => {
			Object.values(timersRef.current).forEach((timer) =>
				clearTimeout(timer)
			);
		};
	}, [autoClose]);

	useEffect(() => {
		// Update all timers when autoCloseDuration changes
		if (autoClose) {
			toasts.forEach((toast) => {
				if (!timersRef.current[toast.id]) {
					const timer = setTimeout(() => {
						dispatch(toastActions.removeToast(toast.id));
					}, autoCloseDuration * 1000);
					timersRef.current[toast.id] = timer;
				}
			});
		}
	}, [toasts, autoClose, autoCloseDuration, dispatch]);

	const handleToastClose = (id) => {
		// Clear the timer for this toast
		clearTimeout(timersRef.current[id]);
		dispatch(toastActions.removeToast(id));
	};

	return (
		<>
			{toasts.length > 0 && (
				<div
					className={`${styles.toast_list} ${
						styles[`toast_list__${position}`]
					}`}
				>
					{toasts.map((toast) => (
						<Toast
							key={toast.id}
							message={toast.message}
							type={toast.type}
							onClose={() => handleToastClose(toast.id)}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default Toasts;
