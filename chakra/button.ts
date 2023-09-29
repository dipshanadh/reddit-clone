import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "full",
		color: "brand.100",
		border: "2px solid",
		fontWeight: "bold",
		_focus: { boxShadow: "none" },
	},
	variants: {
		solid: {
			color: "white",
			bg: "blue.500",
			_hover: { bg: "blue.400" },
		},
		outline: {
			color: "blue.500",
			border: "1px solid",
			borderColor: "blue.500",
		},
		oauth: {
			border: "2px solid",
			borderColor: "gray.300",
			hover: {
				bg: "gray.50",
			},
		},
	},
};
