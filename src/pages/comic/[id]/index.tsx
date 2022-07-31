import {
    AspectRatio,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    LinkOverlay,
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
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Comic from "../../../types/Comic";
import { getComic } from "../../../utils/api/comic";

interface ComicProps {
    comic: Comic;
}

const Comic: NextPage<ComicProps> = ({ comic }) => {
    return (
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
                    <VStack spacing={"2"} align="flex-start" color="gray.400">
                        <Text>Sáng tác bởi {comic.author}</Text>
                        {/* <Text>{comic.status}</Text> */}
                        <Text>{comic.categories.join(" • ")}</Text>
                    </VStack>
                    <HStack flexGrow={1} align="end">
                        <Link
                            href={
                                comic.chapters[comic.chapters.length - 1].href
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
                <TableContainer w="full" maxH={"100vh"} overflowY="auto">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Chương</Th>
                                <Th w="25%">Ngày ra mắt</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {comic.chapters.map((chap, i) => (
                                <Tr
                                    key={i}
                                    cursor="pointer"
                                    color="gray.400"
                                    _hover={{ "& > td": { color: "gray.100" } }}
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
            </VStack>
        </VStack>
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
