import { Flex, Image } from "@chakra-ui/react";

import SearchInput from "./SearchInput";
import RightContent from "./RightContent";

const Navbar: React.FC = () => {
	return (
		<Flex
			bg="white"
			padding="6px 12px"
			align="center"
			gap="10px"
		>
			<Flex alignItems="center">
				<Image
					src="/images/redditFace.svg"
					height="30px"
				/>
				<Image
					src="/images/redditText.svg"
					height="46px"
					display={{ base: "none", md: "block" }}
				/>
			</Flex>
			{/* <Directory /> */}
			<SearchInput />
			<RightContent />
		</Flex>
	);
};

export default Navbar;
