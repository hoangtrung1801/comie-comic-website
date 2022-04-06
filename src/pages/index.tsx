import React from 'react';
import { Box, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import ComicCard from '../components/ComicCard';

const Index: React.FC = () => {

  return (
    <VStack>
      <Box w='full' color='whiteAlpha.800'>
        {/* Truyen de xuat */}
        <VStack spacing={4} align='flex-start' mb='3rem' >
          <Heading as='h3' >Truyện đề xuất</Heading>
          <SimpleGrid columns={5} w='full' spacing={3}>
            {
              Array(10)
                .fill(0)
                .map((_, i) => (
                  <ComicCard key={i} />
                ))
            }
          </SimpleGrid>
        </VStack>

        {/* Truyen moi cap nhat */}
        <VStack spacing={4} align='flex-start' my='3rem'>
          <Heading as='h3'>Truyện mới cập nhật</Heading>
          <SimpleGrid columns={5} w='full' spacing={3}>
            {
              Array(10)
                .fill(0)
                .map((_, i) => (
                  <ComicCard key={i} />
                ))
            }
          </SimpleGrid>
          </VStack>

      </Box>
    </VStack>
  )
}

export default Index
