import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		brand: { 100: "#f3c00" },
	},
	fonts: {
		body: "Open Sans, sans-serif",
	},
	styles: {
		global: () => ({
			bg: "gray.200",
		}),
	},
	components: {
		// Button
	},
});
