import React, { useEffect } from 'react';
import { Box, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import ComicCard from '../components/ComicCard';
import { getHome } from '../utils/api/home';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

const Index: NextPage<{data: any}> = ({data}) => {

  return (
    <VStack>
      <Box w='full' color='whiteAlpha.800'>
        {/* Truyen de xuat */}
        <VStack spacing={4} align='flex-start' mb='3rem' >
          <Heading as='h3' >Truyện đề xuất</Heading>

          <SimpleGrid columns={5} w='full' spacing={3}>
            {
              data.mostView.map((comic, i) => (
                <ComicCard key={i} comic={comic} />
              ))
            }
          </SimpleGrid>
        </VStack>

        {/* Truyen moi cap nhat */}
        <VStack spacing={4} align='flex-start' my='3rem'>
          <Heading as='h3'>Truyện mới cập nhật</Heading>
          <SimpleGrid columns={5} w='full' spacing={3}>
            {
              data.lastUpdate.map((comic, i) => (
                <ComicCard key={i} comic={comic} />
              ))
            }
          </SimpleGrid>
          </VStack>

      </Box>
    </VStack>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getHome();

  return {
    props: {
      data
    },
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getHome();

//   return {
//     props: {
//       data
//     },
//     revalidate: 120
//   }
// }

export default Index
