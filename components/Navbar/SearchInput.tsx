import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchInputProps {
	// user:
}

const SearchInput: React.FC<SearchInputProps> = () => {
	return (
		<Flex flexGrow="1">
			<InputGroup bg="gray.50">
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.400" />
				</InputLeftElement>
				<Input
					type="text"
					placeholder="Search reddit"
					fontSize="sm"
					borderRadius="lg"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						border: "1px solid",
						borderColor: "blue.500",
					}}
				/>
			</InputGroup>
		</Flex>
	);
};

export default SearchInput;
