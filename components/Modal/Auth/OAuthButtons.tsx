import { Button, Image } from "@chakra-ui/react";

const OAuthButtons: React.FC = () => {
	return (
		<Button variant="oauth">
			<Image
				src="/images/googleLogo.png"
				height="20px"
				mr="8px"
			/>
			Continue with Google
		</Button>
	);
};

export default OAuthButtons;
