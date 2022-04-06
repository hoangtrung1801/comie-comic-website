import React from 'react';
import { Heading, HStack, VStack } from "@chakra-ui/react"
import ComicCard from '../components/ComicCard';

const Index: React.FC = () => {

  return (
    <VStack>
      <VStack w='full' align='flex-start'>
        <Heading>Truyện đề xuất</Heading>
        <HStack w='full'>
          <ComicCard />
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Index
