import { useRecoilValue } from "recoil";

import Login from "./Login";
import SignUp from "./SignUp";

import { authModalState } from "@/atom/authModalAtom";

interface AuthInputProps {}

const AuthInputs: React.FC<AuthInputProps> = () => {
	const modalState = useRecoilValue(authModalState);

	return (
		<>
			{modalState.view === "login" && <Login />}
			{modalState.view === "signup" && <SignUp />}
		</>
	);
};

export default AuthInputs;
