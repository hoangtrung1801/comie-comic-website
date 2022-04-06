import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface ComicCardProps {}

export default function ComicCard({} : ComicCardProps) {

  return (
    <Flex w='25%' bg='white'>
      <Box w='full'  position='relative'>
        <Image src={data.imageURL} position='absolute' top='0' h='full' w='full' objectFit='cover'/>
      </Box>
    </Flex>
  )
}