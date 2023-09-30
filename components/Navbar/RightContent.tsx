import { useSetRecoilState } from "recoil";
import { Button, Flex } from "@chakra-ui/react";

import AuthModal from "@/components/Modal/Auth";

import { authModalState } from "@/atom/authModalAtom";

interface RightContentProps {
	// user
}

const RightContent: React.FC<RightContentProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);

	return (
		<>
			<AuthModal />
			<Flex
				align="center"
				gap="5px"
			>
				<Button
					variant="outline"
					display={{ base: "none", sm: "block" }}
					size="sm"
					width={{ base: "70px", md: "110px" }}
					onClick={() =>
						setAuthModalState({ open: true, view: "login" })
					}
				>
					Log in
				</Button>
				<Button
					size="sm"
					width={{ base: "70px", md: "110px" }}
					onClick={() =>
						setAuthModalState({ open: true, view: "signup" })
					}
				>
					Sign up
				</Button>
			</Flex>
		</>
	);
};

export default RightContent;
