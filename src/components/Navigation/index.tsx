import { Box, Container, Flex, Heading, Text, Link as LinkChakra } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {

  return (
    <Box boxShadow='lg'>
      <Container maxW="container.xl" h="70px" display='flex' alignItems='center'>
        <Text fontSize='3xl' fontWeight='bold'>
          <Link href='/'>
            <LinkChakra _hover={{textDecor: 'none'}}>COMIE</LinkChakra>
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Navigation;