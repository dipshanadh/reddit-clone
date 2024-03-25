import { Button, Image, VStack, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { auth } from "@/firebase/clientApp";

const OAuthButtons: React.FC = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

	return (
		<VStack spacing="8px">
			<Button
				variant="oauth"
				onClick={() => signInWithGoogle()}
			>
				<Image
					src="/images/googleLogo.png"
					height="20px"
					mr="8px"
				/>
				Continue with Google
			</Button>
			{error && <Text>{error.message}</Text>}
		</VStack>
	);
};

export default OAuthButtons;
