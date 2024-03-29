import Navbar from "../Navbar";

interface props {
	children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
