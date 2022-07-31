import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Comic from "../types/Comic";
import ComicCard from "./ComicCard";

interface CarouselProps {
    comics: Comic[];
}

const CarouselComics: React.FC<CarouselProps> = ({ comics }) => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        w: "auto",
        mt: "-22px",
        p: "8px",
        color: "orange.400",
        fontWeight: "bold",
        fontSize: "2xl",
        transition: "0.6s ease",
        userSelect: "none",
        zIndex: 10,
        _hover: {
            bg: "black",
            color: "white",
        },
    };

    const slidesToShow = 6;
    const slidesCount = Math.ceil(comics.length / slidesToShow);
    const maxCurrentSlide = comics.length / slidesToShow - 1;

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((s) =>
            s <= 0 ? Math.min(slidesCount - 1, maxCurrentSlide) : s - 1
        );
    };
    const nextSlide = () => {
        setCurrentSlide((s) =>
            s === slidesCount - 1 || s === maxCurrentSlide
                ? 0
                : Math.min(maxCurrentSlide, s + 1)
        );
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    return (
        <Flex w="full" alignItems="center" justifyContent="center">
            <Flex w="full" overflow="hidden" pos="relative">
                <Flex h="auto" w="full" sx={{ ...carouselStyle }}>
                    {comics.map((comic, sid) => (
                        <Box
                            key={`slide-${sid}`}
                            h="full"
                            w={`${100 / slidesToShow}%`}
                            flex="none"
                            px="0.4rem"
                        >
                            <Box boxSize="full" shadow="md">
                                <ComicCard comic={comic} />
                            </Box>
                        </Box>
                    ))}
                </Flex>
                <Text left="0" onClick={prevSlide} sx={{ ...arrowStyles }}>
                    &#10094;
                </Text>
                <Text sx={{ ...arrowStyles }} right="0" onClick={nextSlide}>
                    &#10095;
                </Text>
            </Flex>
        </Flex>
    );
};

export default CarouselComics;
