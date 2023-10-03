import { useRecoilState } from "recoil";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	VStack,
	Text,
} from "@chakra-ui/react";

import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

import { authModalState } from "@/atom/authModalAtom";

const AuthModal: React.FC = () => {
	const [modalState, setModalState] = useRecoilState(authModalState);

	const handleClose = () => {
		setModalState(prevState => ({
			...prevState,
			open: false,
		}));
	};

	return (
		<>
			<Modal
				isOpen={modalState.open}
				onClose={handleClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign="center">
						{modalState.view === "login" && "Login"}
						{modalState.view === "signup" && "Sign up"}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing="16px">
							<OAuthButtons />
							<Text
								color="gray.500"
								fontWeight="bold"
							>
								OR
							</Text>
							<AuthInputs />
							{/* <ResetPassword /> */}
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AuthModal;
