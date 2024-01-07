import whatsAppImage from "../../assets/WhatsAppButtonGreenSmall.png";

import styles from "./WhatsAppButton.module.css";

const whatsAppNumber = import.meta.env.VITE_WHATS_APP_NUMBER;

const WhatsAppButton = () => {
	const customText =
		"Hello, I'm interested in one of your products/services.";

	const whatsappLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
		customText
	)}`;

	return (
		<a
			className={styles.container__whatsAppImage}
			aria-label="Chat on WhatsApp"
			href={whatsappLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className={styles.whatsAppImage}
				alt="Chat on WhatsApp"
				src={whatsAppImage}
			/>
		</a>
	);
};

export default WhatsAppButton;
