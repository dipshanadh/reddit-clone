import { Button, Flex } from "@chakra-ui/react";

interface RightContentProps {
	// user
}

const RightContent: React.FC<RightContentProps> = () => {
	return (
		<>
			{/* <AuthModal /> */}
			<Flex
				align="center"
				gap="5px"
			>
				<Button
					variant="outline"
					display={{ base: "none", sm: "block" }}
				>
					Log in
				</Button>
				<Button>Sign up</Button>
			</Flex>
		</>
	);
};

export default RightContent;
