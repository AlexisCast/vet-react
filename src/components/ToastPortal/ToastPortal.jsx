import ReactDOM from "react-dom";

const ToastPortal = ({ children }) => {
	const toastRoot = document.getElementById("toast-root");
	if (!toastRoot) return null;

	return ReactDOM.createPortal(children, toastRoot);
};

export default ToastPortal;
