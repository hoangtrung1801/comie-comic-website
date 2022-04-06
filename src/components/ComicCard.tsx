import { AspectRatio, Box, Flex, Image, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';

const data = {
  isNew: true,
  imageURL:
    'https://picsum.photos/300/400',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface ComicCardProps {}

export default function ComicCard({} : ComicCardProps) {

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
          <LinkOverlay href='#' />
          <AspectRatio ratio={3 / 4} w="full">
            <Image src={`https://picsum.photos/id/${Math.floor(Math.random() * 300)}/300/400`} />
          </AspectRatio>
        </Box>
        <Box py='4px'>
          <Text textAlign="center" fontWeight='semibold' lineHeight='tall'>
            {data.name}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}