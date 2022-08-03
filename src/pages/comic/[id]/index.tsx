import {
    AspectRatio,
    Box,
    Button,
    Center,
    Heading,
    HStack,
    Image,
    LinkOverlay,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { BookOpen, Plus, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import Layout from "../../../components/Layout";
import Comic from "../../../types/Comic";
import { getComic, getMoreChapterComic } from "../../../utils/api/comic";

interface ComicProps {
    comic: Comic;
}

const Comic: NextPage<ComicProps> = ({ comic }) => {
    const [chapters, setChapters] = useState(comic.chapters.slice(0, 20));
    const [isLoadingChapters, setIsLoadingChapters] = useState(false);

    const onSeeMore = () => {
        console.log("get more chapters");
        setIsLoadingChapters(true);

        setTimeout(() => {
            setChapters(comic.chapters);
            setIsLoadingChapters(false);
        }, 0);
    };
    return (
        <Layout>
            <VStack align="flex-start" spacing={12}>
                <HStack spacing={4} align="stretch">
                    <Box>
                        <AspectRatio
                            ratio={3 / 4}
                            w={60}
                            rounded={"md"}
                            overflow="hidden"
                        >
                            <Image src={comic.imageSrc} />
                        </AspectRatio>
                    </Box>

                    <VStack align="start" spacing={4}>
                        <Heading>{comic.title}</Heading>
                        <VStack
                            spacing={"2"}
                            align="flex-start"
                            color="gray.400"
                        >
                            <Text>Sáng tác bởi {comic.author}</Text>
                            {/* <Text>{comic.status}</Text> */}
                            <Text>{comic.categories.join(" • ")}</Text>
                            <HStack spacing={3}>
                                <HStack spacing={1}>
                                    <BookOpen />
                                    <Text>{comic.views}</Text>
                                </HStack>
                                <HStack spacing={1}>
                                    <ThumbsUp />
                                    <Text>{comic.likes}</Text>
                                </HStack>
                                {/* <Text>100k luot</Text>
                            <Text>100 chuong</Text> */}
                            </HStack>
                        </VStack>
                        <HStack flexGrow={1} align="end">
                            <Link
                                href={
                                    comic.chapters[comic.chapters.length - 1]
                                        .href
                                }
                            >
                                <Button variant="type1">Đọc ngay</Button>
                            </Link>
                            <Link href={comic.chapters[0].href}>
                                <Button variant="type1">Chương mới nhất</Button>
                            </Link>
                        </HStack>
                    </VStack>
                </HStack>

                <VStack align="flex-start">
                    {/* <Heading variant={"title"}>Nội dung</Heading> */}
                    <Heading as="h2" size="lg">
                        Nội dung
                    </Heading>
                    <Text color="gray.400">{comic.description}</Text>
                </VStack>

                <VStack align="flex-start" w="full">
                    {/* <Heading variant={"title"}>Chương</Heading> */}
                    <Heading as="h2" size="lg">
                        Danh sách chương
                    </Heading>
                    <TableContainer w="full">
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Chương</Th>
                                    <Th w="25%">Ngày ra mắt</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {chapters.map((chap, i) => (
                                    <Tr
                                        key={i}
                                        cursor="pointer"
                                        color="gray.400"
                                        _hover={{
                                            "& > td": { color: "gray.100" },
                                        }}
                                    >
                                        <Td position="relative">
                                            <Link href={chap.href}>
                                                <LinkOverlay>
                                                    Chương {chap.chapterId}
                                                </LinkOverlay>
                                            </Link>
                                        </Td>
                                        <Td>{chap.updateAt}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    {/* <HStack w="full" justify={"center"} bg="gray.700" py={4}>
                        <Plus />
                        <Text>Xem thêm</Text>
                    </HStack> */}
                    <HStack justify={"center"} w="full">
                        {isLoadingChapters && <Spinner />}
                        {chapters.length < comic.chapters.length &&
                            !isLoadingChapters && (
                                <Button w="full" onClick={onSeeMore}>
                                    <HStack>
                                        <Plus />
                                        <Text>Xem thêm</Text>
                                    </HStack>
                                </Button>
                            )}
                    </HStack>
                </VStack>
            </VStack>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const comic = await getComic(context.query.id.toString());

    return {
        props: {
            comic,
        },
    };
};

export default Comic;
