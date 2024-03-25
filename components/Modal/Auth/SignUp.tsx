import { useState } from "react";
import { Text, Button, Input, VStack, HStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "@/firebase/clientApp";
import { authModalState } from "@/atom/authModalAtom";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);

	const [signupForm, setSignupForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [formError, setFormError] = useState("");
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSignupForm(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formError) setFormError("");

		if (signupForm.password !== signupForm.confirmPassword)
			return setFormError("Passwords do not match");

		createUserWithEmailAndPassword(signupForm.email, signupForm.password);
	};

	return (
		<form onSubmit={onSubmit}>
			<VStack spacing="8px">
				<Input
					required
					name="email"
					type="email"
					placeholder="Email"
					onChange={onChange}
					bg="gray.50"
					fontSize="sm"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
				/>
				<Input
					required
					name="password"
					type="password"
					placeholder="Password"
					onChange={onChange}
					bg="gray.50"
					fontSize="sm"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
				/>
				<Input
					required
					name="confirmPassword"
					type="password"
					placeholder="Confirm Password"
					onChange={onChange}
					bg="gray.50"
					fontSize="sm"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
				/>
				<Text
					textAlign="center"
					mt={2}
					fontSize="10pt"
					color="red"
				>
					{formError || error?.message}
				</Text>
				<Button
					type="submit"
					width="100%"
					height="36px"
					isLoading={loading}
				>
					Sign Up
				</Button>
			</VStack>
			<HStack
				gap="1ch"
				marginBlock="16px"
			>
				<Text>Already have an account?</Text>
				<Text
					as="u"
					color="blue.500"
					cursor="pointer"
					onClick={() =>
						setAuthModalState(prevState => ({
							...prevState,
							view: "login",
						}))
					}
				>
					Login
				</Text>
			</HStack>
		</form>
	);
};

export default SignUp;
