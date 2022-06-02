import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, chakra, VStack, HStack, Button, Select, Image } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Chapter } from "../../../types/Chapter";
import { getChapter } from "../../../utils/api/chapter";

interface ChapterProps {
  chapter: Chapter
}

const Chapter: NextPage<ChapterProps> = ({chapter}) => {

  return (
    <VStack>
      <Box>
        <Heading as="h2">
          <Link
            href="#"
            _hover={{ textDecor: "none" }}
          >
            <chakra.span color="#6c5ce7" _hover={{ color: "#a29bfe" }}>
              Title {chapter.title} 
            </chakra.span>{" "}
          </Link>
          - Chapter {chapter.chap} 
        </Heading>
      </Box>
      
      <HStack>
        <Button><ArrowLeftIcon /></Button>
        <Select>
          {
            Array(20)
              .fill(0)
              .map((_, i) => (
                <option key={i} value={i+1} selected={chapter.chap == i+1 ? true : false}>Chapter {i+1}</option>
              ))
          }
        </Select>
        <Button><ArrowRightIcon /></Button>
      </HStack>

      <VStack> 
        {
          chapter.images.map((img, i) => (
            <Image src={img} key={img} />
          ))
        }
      </VStack>
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id: comicId, chapter: chapterId } = context.query;
  const chapter: Chapter = await getChapter(comicId.toString(), parseInt(chapterId.toString()));

  return {
    props: {
      chapter
    }
  }
}

export default Chapter;