import {
    Box,
    Center,
    Container,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowLeft, CaretDown, CaretLeft, CaretRight } from "phosphor-react";
import { Chapter } from "../types/Chapter";
import Comic from "../types/Comic";
import Logo from "./Logo";

interface NavigationChapterProps {
    comic: Comic;
    chapter: Chapter;
}

const NavigationChapter: React.FC<NavigationChapterProps> = ({
    comic,
    chapter,
}) => {
    return (
        <Container
            maxW={"container.xl"}
            pos={"fixed"}
            inset={"0 auto auto 0"}
            bg="gray.900"
            h={20}
        >
            <Flex h="full" justify={"space-between"} align="center">
                <HStack flex={"1 1"}>
                    <Link href={`/comic/${comic.id}`}>
                        <ArrowLeft size={28} />
                    </Link>
                    <Logo />
                </HStack>
                <Box pos="relative" alignSelf={"stretch"}>
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
                        {/* <HStack align="center" cursor={"pointer"} color="gray.400">
                        <Text>Chương {chapter.chap}</Text>
                        <CaretDown />
                    </HStack> */}
                        <Menu isLazy>
                            <MenuButton>
                                <Center color="gray.400">
                                    <Text mr={2}>Chương {chapter.chap}</Text>
                                    <CaretDown />
                                </Center>
                            </MenuButton>
                            <MenuList maxH={"60vh"} overflowY="auto">
                                {/* <MenuItem>item 1</MenuItem>
                            <MenuItem>item 2</MenuItem>
                            <MenuItem>item 3</MenuItem> */}
                                {comic.chapters.slice(0, 20).map((chapter) => (
                                    <MenuItem>
                                        Chương {chapter.chapterId}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
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
                <Box flex={"1 1"}></Box>
            </Flex>
        </Container>
    );
};

export default NavigationChapter;
