import { Image, VStack } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Layout from "../../../components/Layout";
import NavigationChapter from "../../../components/NavigationChapter";
import { Chapter } from "../../../types/Chapter";
import Comic from "../../../types/Comic";
import { getChapter } from "../../../utils/api/chapter";
import { getComic } from "../../../utils/api/comic";

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
        <Layout nav={<NavigationChapter comic={comic} chapter={chapter} />}>
            <VStack spacing={12}>
                {/* <NavigationChapter comic={comic} chapter={chapter} /> */}

                <VStack>
                    {chapter.images.map((img, i) => (
                        <Image src={img} key={img} />
                    ))}
                </VStack>
            </VStack>
        </Layout>
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
