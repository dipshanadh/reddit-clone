import { atom } from "recoil";

export interface AuthModalState {
	open: boolean;
	view: "login" | "signup" | "resetPassword";
}

export const authModalState = atom<AuthModalState>({
	key: "authModalState",
	default: {
		open: false,
		view: "login",
	},
});
