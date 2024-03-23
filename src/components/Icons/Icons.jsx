import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCaretDown,
	faCircleCheck,
	faCircleExclamation,
	faCircleInfo,
	faCircleXmark,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CloseIcon = ({ iconColor = "#000000", ...props }) => (
	<FontAwesomeIcon icon={faXmark} style={{ color: iconColor }} {...props} />
);

const FailureIcon = ({ iconColor = "#b52424", ...props }) => (
	<FontAwesomeIcon
		icon={faCircleXmark}
		style={{ color: iconColor }}
		{...props}
	/>
);

const WarningIcon = ({ iconColor = "#d46413", ...props }) => (
	<FontAwesomeIcon
		icon={faCircleExclamation}
		style={{ color: iconColor }}
		{...props}
	/>
);

const SuccessIcon = ({ iconColor = "#29862b", ...props }) => (
	<FontAwesomeIcon
		icon={faCircleCheck}
		style={{ color: iconColor }}
		{...props}
	/>
);

const InfoIcon = ({ iconColor = "#326bcd", ...props }) => (
	<FontAwesomeIcon
		icon={faCircleInfo}
		style={{ color: iconColor }}
		{...props}
	/>
);

const CaretDownIcon = ({ iconColor = "#c0c0c0", ...props }) => (
	<FontAwesomeIcon
		icon={faCaretDown}
		style={{ color: iconColor }}
		{...props}
	/>
);

const BarsIcon = ({ ...props }) => <FontAwesomeIcon icon={faBars} {...props} />;

export {
	BarsIcon,
	CaretDownIcon,
	CloseIcon,
	FailureIcon,
	InfoIcon,
	SuccessIcon,
	WarningIcon,
};
