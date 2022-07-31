import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import {
    ArrowArcLeft,
    ArrowDown,
    ArrowLineDown,
    CaretDown,
    CaretLeft,
    CaretRight,
} from "phosphor-react";
import { Chapter } from "../types/Chapter";
import Comic from "../types/Comic";

interface NavigationChapterProps {
    comic: Comic;
    chapter: Chapter;
}

const NavigationChapter: React.FC<NavigationChapterProps> = ({
    comic,
    chapter,
}) => {
    return (
        <Flex w="100vw" h={20} bg="whiteAlpha.200" justify={"space-between"}>
            <Box></Box>
            <Box pos="relative">
                <Box
                    pos="absolute"
                    left={4}
                    top={"50%"}
                    transform="translateY(-50%)"
                >
                    <CaretLeft size={28} />
                </Box>
                <Center
                    w={"xl"}
                    h="full"
                    bg={"black"}
                    flexDirection="column"
                    fontSize={"lg"}
                >
                    <Text color="gray.200">{comic.title}</Text>
                    <HStack align="center" cursor={"pointer"} color="gray.400">
                        <Text>Chương {chapter.chap}</Text>
                        <CaretDown />
                    </HStack>
                </Center>
                <Box
                    pos="absolute"
                    right={4}
                    top={"50%"}
                    transform="translateY(-50%)"
                >
                    <CaretRight size={28} />
                </Box>
            </Box>
            <Box></Box>
        </Flex>
    );
};

export default NavigationChapter;
