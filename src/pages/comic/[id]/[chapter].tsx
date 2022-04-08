import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, chakra, VStack, HStack, Button, Select } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

interface ChapterProps {}

const Chapter: NextPage<ChapterProps> = ({}) => {
  const router = useRouter();
  const {chapter} = router.query;

  return (
    <VStack>
      <Box>
        <Heading as="h2">
          <Link
            href="#"
            _hover={{ textDecor: "none" }}
          >
            <chakra.span color="#6c5ce7" _hover={{ color: "#a29bfe" }}>
              Title comic
            </chakra.span>{" "}
          </Link>
          - Chapter {chapter} 
        </Heading>
      </Box>
      
      <HStack>
        <Button><ArrowLeftIcon /></Button>
        <Select>
          {
            Array(20)
              .fill(0)
              .map((_, i) => (
                <option key={i} value={i+1}>Chapter {i+1}</option>
              ))
          }
        </Select>
        <Button><ArrowRightIcon /></Button>
      </HStack>
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {

    }
  }
}

export default Chapter;