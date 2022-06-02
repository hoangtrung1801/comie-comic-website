import { AspectRatio, Box, Flex, Heading, Image, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { Comic } from '../types/Comic';

interface ComicCardProps {
  comic: Comic
}

export default function ComicCard({comic} : ComicCardProps) {
  return (
    <Box w="full" h='full'>
      <Flex
        position='relative'
        direction='column'
        w='full'
        h='full'
        rounded='sm'
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
        <Box p='0.75rem'>
          <Heading noOfLines={2} size={'sm'} fontWeight='semibold' lineHeight='tall'>
            {comic.title}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}