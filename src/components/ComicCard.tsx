import {
    AspectRatio,
    Box,
    Flex,
    Heading,
    Image,
    LinkOverlay,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Comic from "../types/Comic";

interface ComicCardProps {
    comic: Comic;
    horizontal?: boolean;
}

export default function ComicCard({
    comic,
    horizontal = false,
}: ComicCardProps) {
    return (
        <Box w="full" h="full">
            <Flex
                position="relative"
                flexDirection={horizontal ? "row" : "column"}
                w="full"
                h="full"
                _hover={{
                    "&:hover .image::after": {
                        opacity: 0.3,
                    },
                }}
            >
                <Box mr={horizontal && "4"}>
                    <Link passHref href={`/comic/${comic.id}`}>
                        <LinkOverlay
                            _hover={{
                                background: "gray.500",
                            }}
                        />
                    </Link>
                    <AspectRatio
                        className="image"
                        ratio={3 / 5}
                        w={horizontal && "24"}
                        rounded={"md"}
                        overflow="hidden"
                        _after={{
                            content: `''`,
                            pos: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            bg: "black",
                            opacity: 0,
                            transition: "ease 0.3s",
                        }}
                    >
                        {/* <Image src={`https://picsum.photos/id/${Math.floor(Math.random() * 300)}/300/400`} /> */}
                        <Image src={comic.imageSrc} w={horizontal && "24"} />
                    </AspectRatio>
                </Box>
                <Flex
                    py="0.75rem"
                    color={"gray.400"}
                    fontSize={"md"}
                    direction="column"
                    justify={"center"}
                >
                    <Text noOfLines={1} color={"gray.200"}>
                        {comic.title}
                    </Text>
                    <Text>1 chương</Text>
                    <Text>100.0K lượt</Text>
                </Flex>
            </Flex>
        </Box>
    );
}
