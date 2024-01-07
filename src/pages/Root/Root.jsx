import { useEffect } from "react";
import {
	Outlet,
	useLoaderData,
	useNavigation,
	useSubmit,
} from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

import Portal from "../../components/Portal/Portal";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

import styles from "./Root.module.css";

const RootLayout = () => {
	const navigation = useNavigation();
	const token = useLoaderData();
	const submit = useSubmit();

	console.log("id:root", token);

	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === "EXPIRED") {
			console.log("will erase");

			submit(null, { action: "/logout", method: "post" });
			return;
		}

		// getTokenVerification
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main className={styles.content}>
				{navigation.state === "loading" && <p>Loading...</p>}
				<Outlet />
			</main>
			<Portal>
				<WhatsAppButton />
			</Portal>
		</>
	);
};

export default RootLayout;
