import { useRecoilState } from "recoil";
import {
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	VStack,
} from "@chakra-ui/react";

import AuthInputs from "./AuthInputs";

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
							{/* <OAuthButtons /> */}
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
