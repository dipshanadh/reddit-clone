import { useState } from "react";
import { Text, Button, Input, VStack, HStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { authModalState } from "@/atom/authModalAtom";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);

	const [signupForm, setSignupForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSignupForm(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	// Firebase logic
	const onSubmit = () => {};

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
				<Button
					type="submit"
					width="100%"
					height="36px"
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
