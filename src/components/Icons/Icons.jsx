import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleCheck,
	faCircleExclamation,
	faCircleXmark,
	faSquareXmark,
	faCaretDown,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

const CloseIcon = () => (
	<FontAwesomeIcon icon={faSquareXmark} style={{ color: "#c4c6ca" }} />
);

const FailureIcon = () => (
	<FontAwesomeIcon icon={faCircleXmark} style={{ color: "#cc0047" }} />
);

const WarningIcon = () => (
	<FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#326bcd" }} />
);

const SuccessIcon = () => (
	<FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1a6b1b" }} />
);

const CaretDownIcon = ({ ...props }) => (
	<FontAwesomeIcon {...props} icon={faCaretDown} />
);

const BarsIcon = ({ ...props }) => <FontAwesomeIcon icon={faBars} {...props} />;

export {
	BarsIcon,
	CaretDownIcon,
	CloseIcon,
	FailureIcon,
	SuccessIcon,
	WarningIcon,
};
