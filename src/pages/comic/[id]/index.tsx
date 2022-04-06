import { AspectRatio, Box, Button, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface ComicProps {}

export default function Comic({}: ComicProps) {
  const router = useRouter();

  return (
    <VStack align='flex-start' spacing={8}>
      <HStack align='flex-start' spacing={4}>
        <Box>
          <AspectRatio ratio={3/4} w='300px'>
            <Image src={`https://picsum.photos/id/${Math.floor(Math.random() * 300)}/300/400`} />
          </AspectRatio>
        </Box>

        <VStack align='flex-start' fontSize='lg' p='2rem 1rem'>
          <Text>Title: title</Text>
          <Text>Author: author</Text>
          <Text>Status: status</Text>
          <Text>Type: type</Text>
          <HStack>
            <Button>First read</Button>
            <Button>Read the last</Button>
          </HStack>
        </VStack>

      </HStack>

      <VStack align='flex-start'>
        <Heading as='h2'>Content</Heading>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem doloremque nostrum consequatur inventore tempora molestiae deleniti consectetur sint quae! Reiciendis distinctio voluptas esse officiis ea quasi, libero pariatur expedita voluptatem?</Text>
      </VStack>

      <VStack align='flex-start' w='full'>
        <Heading as='h2'>Chapter</Heading>
        <TableContainer w='full'>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Chapter</Th>
                <Th w='25%'>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                Array(20)
                  .fill(0)
                  .map((_, i) => (
                    <Tr key={i} cursor='pointer' color='gray.400' _hover={{'& > td': {color: 'gray.100'}}}>
                      <Td>Chapter {i+1}</Td>
                      <Td>{i+1} day ago</Td>
                    </Tr>
                  ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </VStack>
  )
}