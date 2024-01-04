import { redirect } from "react-router-dom";

export const setToken = (token) => {
	if (token) {
		localStorage.setItem("token", token);
	} else {
		localStorage.removeItem("token");
	}
};

export const setUser = (user) => {
	if (user) {
		localStorage.setItem("user", user);
	} else {
		localStorage.removeItem("user");
	}
};

export const getAuthToken = () => {
	const token = localStorage.getItem("token");

	if (!token) {
		return null;
	}

	return token;
};

export const getUser = () => {
	const user = localStorage.getItem("user");

	if (!user) {
		return "User";
	}

	return JSON.parse(user);
};

export const tokenLoader = () => {
	const token = getAuthToken();
	return token;
};

export const checkAuthLoader = () => {
	const token = getAuthToken();

	if (!token) {
		return redirect("/auth?mode=login");
	}

	return null;
};

export const isTokenExpired = (msg) => {
	if (msg === "Token has expired") {
		window.confirm("Session has expired...");
		localStorage.setItem("token", "EXPIRED");
		return true;
	}
	return false;
};
