import { Box, Heading, VStack } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import CarouselComics from "../components/CarouselComics";
import TopComics from "../components/TopComics";
import { getHome } from "../utils/api/home";

const Index: NextPage<{ data: any }> = ({ data }) => {
    return (
        <VStack>
            <Box w="full">
                {/* Truyen de xuat */}
                <VStack spacing={4} align="flex-start" mb="3rem">
                    <Box position={"relative"}>
                        {/* <Heading variant={"title"}>Truyện đề xuất</Heading> */}
                        <Heading as={"h2"} size="lg">
                            Truyện đề xuất
                        </Heading>
                    </Box>
                    <CarouselComics comics={data.mostView} />
                </VStack>

                {/* Truyen moi cap nhat */}
                <VStack spacing={4} align="flex-start" my="3rem">
                    <Box position={"relative"}>
                        {/* <Heading variant={"title"}>Truyện mới cập nhật</Heading> */}
                        <Heading as={"h2"} size="lg">
                            Truyện mới cập nhật
                        </Heading>
                    </Box>
                    <CarouselComics comics={data.lastUpdate} />
                </VStack>

                {/* Top truyen tranh */}
                <VStack spacing={4} align="flex-start" my="3rem">
                    <Box position={"relative"}>
                        {/* <Heading variant={"title"}>Truyện mới cập nhật</Heading> */}
                        <Heading as={"h2"} size="lg">
                            Top truyện tranh
                        </Heading>
                    </Box>
                    <TopComics comics={data.top.slice(0, 6)} />
                </VStack>
            </Box>
        </VStack>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getHome();
    return {
        props: {
            data,
        },
    };
};

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getHome();

//   return {
//     props: {
//       data
//     },
//     revalidate: 120
//   }
// }

export default Index;
