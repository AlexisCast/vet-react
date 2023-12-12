import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

import styles from "./Root.module.css";

const RootLayout = () => {
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main className={styles.content}>
				{navigation.state === "loading" && <p>Loading...</p>}
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
