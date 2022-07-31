import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Link as LinkChakra,
    Button,
    chakra,
    Heading,
    HStack,
    Image,
    Select,
    VStack,
    Text,
    Container,
    SimpleGrid,
    Center,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { X } from "phosphor-react";
import { useState } from "react";
import { Chapter } from "../../../types/Chapter";
import { getChapter } from "../../../utils/api/chapter";
import { getComic } from "../../../utils/api/comic";
import Comic from "../../../types/Comic";
import NavigationChapter from "../../../components/NavigationChapter";

interface ChapterProps {
    chapter: Chapter;
    comic: Comic;
}

const Chapter: NextPage<ChapterProps> = ({ chapter, comic }) => {
    console.log(chapter);
    console.log(comic);

    const [boxListChapter, setBoxListChapter] = useState(false);

    const openBoxListChapter = () => {
        setBoxListChapter(true);
    };

    const closeBoxListChapter = () => {
        setBoxListChapter(false);
    };

    return (
        <VStack spacing={12}>
            {/* Navigation chapter */}
            {/* <Box
                w="full"
                h="calc(100vh - 80px)"
                pos="fixed"
                bottom="0"
                left="0"
                bgColor="rgba(0, 0, 0, 0.2)"
                zIndex="10"
                py="1rem"
                display={boxListChapter ? "block" : "none"}
            >
                <Box
                    width="50%"
                    height="100%"
                    bgColor="gray.700"
                    mx="auto"
                    p="2.5rem 2rem"
                    borderRadius="md"
                    pos="relative"
                    overflowY={"auto"}
                >
                    <Box
                        pos="absolute"
                        top="1rem"
                        right="1rem"
                        fontSize="lg"
                        fontWeight="semibold"
                        cursor="pointer"
                        onClick={closeBoxListChapter}
                    >
                        <X />
                    </Box>
                    <SimpleGrid columns={4} gap="1rem">
                        {comic.chapters.map((chap, id) => (
                            <Link href={chap.href} key={id}>
                                <Center
                                    p="0.5rem"
                                    borderRadius="md"
                                    bgColor="gray.800"
                                    cursor={"pointer"}
                                >
                                    <Text fontWeight="semibold">
                                        Chương {chap.chapterId}
                                    </Text>
                                </Center>
                            </Link>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box> */}

            {/* <Box>
                <Heading as="h2">
                    <Link href={`/comic/${chapter.comicId}`} passHref>
                        <LinkChakra _hover={{ textDecor: "none" }}>
                            <chakra.span
                                color="#6c5ce7"
                                _hover={{ color: "#a29bfe" }}
                            >
                                {chapter.title}
                            </chakra.span>{" "}
                        </LinkChakra>
                    </Link>
                    - Chapter {chapter.chap}
                </Heading>
            </Box> */}

            {/* <HStack>
                <Link
                    href={
                        comic.chapters.find(
                            (chap) => chap.chapterId === chapter.chap - 1
                        )?.href || "#"
                    }
                >
                    <Button>
                        <ArrowLeftIcon />
                    </Button>
                </Link>
                <Box
                    borderWidth="2px"
                    borderColor="gray.500"
                    borderRadius="lg"
                    h="40px"
                    p="1rem 2rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    onClick={openBoxListChapter}
                >
                    <Text>Chương {chapter.chap}</Text>
                </Box>
                <Link
                    href={
                        comic.chapters.find(
                            (chap) => chap.chapterId === chapter.chap + 1
                        )?.href || "#"
                    }
                >
                    <Button>
                        <ArrowRightIcon />
                    </Button>
                </Link>
            </HStack> */}

            <NavigationChapter comic={comic} chapter={chapter} />

            <VStack>
                {chapter.images.map((img, i) => (
                    <Image src={img} key={img} />
                ))}
            </VStack>
        </VStack>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id: comicId, chapter: chapterId } = context.query;
    const chapter: Chapter = await getChapter(
        comicId.toString(),
        parseInt(chapterId.toString())
    );
    const comic: Comic = await getComic(comicId.toString());

    return {
        props: {
            chapter,
            comic,
        },
    };
};

export default Chapter;
