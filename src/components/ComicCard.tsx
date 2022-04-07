import { AspectRatio, Box, Flex, Image, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { Comic } from '../types/Comic';

interface ComicCardProps {
  comic: Comic
}

export default function ComicCard({comic} : ComicCardProps) {
  console.log(comic);

  return (
    <Flex w="full" direction="column">
      <Box
        position='relative'
        w='full'
        rounded='lg'
        shadow='lg'
        bg='gray.700'
        overflow='hidden'
      >
        <Box>
          <LinkOverlay href={`/comic/${comic.id}`} />
          <AspectRatio ratio={3 / 4} w="full">
            {/* <Image src={`https://picsum.photos/id/${Math.floor(Math.random() * 300)}/300/400`} /> */}
            <Image src={comic.imageSrc} />
          </AspectRatio>
        </Box>
        <Box py='4px'>
          <Text textAlign="center" fontWeight='semibold' lineHeight='tall'>
            {comic.title}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}