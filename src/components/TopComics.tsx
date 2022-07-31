import { Box, Center, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Comic from "../types/Comic";
import ComicCard from "./ComicCard";

interface TopComicsProps {
    comics: Comic[];
}

const TopComics: React.FC<TopComicsProps> = ({ comics }) => {
    return (
        <SimpleGrid columns={3} spacingX={10} spacingY={4}>
            {comics.map((comic, id) => (
                <HStack key={comic.title}>
                    <Center px="2">
                        <Text
                            fontSize={"xl"}
                            fontWeight="bold"
                            color="gray.400"
                        >
                            {id + 1}
                        </Text>
                    </Center>
                    <ComicCard comic={comic} horizontal={true} />
                </HStack>
            ))}
        </SimpleGrid>
    );
};

export default TopComics;
