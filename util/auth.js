export const setToken = (token) => {
	if (token) {
		localStorage.setItem("token", token);
	} else {
		localStorage.removeItem("token");
	}
};

export const getAuthToken = () => {
	const token = localStorage.getItem("token");
	return token;
};
