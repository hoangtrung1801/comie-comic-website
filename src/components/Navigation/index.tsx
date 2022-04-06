import { Box, Container, Flex, Heading, Text, Link as LinkChakra } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {

  return (
    <Box bgColor="gray.700">
      <Container maxW="container.xl" h="70px" display='flex' alignItems='center'>
        <Heading>
          <Link href='/'>
            <LinkChakra _hover={{textDecor: 'none'}}>COMIE</LinkChakra>
          </Link>
        </Heading>
      </Container>
    </Box>
  );
}

export default Navigation;