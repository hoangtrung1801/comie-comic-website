import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import {
    EnvelopeSimple,
    FacebookLogo,
    GithubLogo,
    InstagramLogo,
} from "phosphor-react";
import React from "react";
import IconButton from "./Buttons/IconButton";

const description = "© 2022, Le Kim Hoang Trung • Da Nang • Vietnam";
const email = "hoangtrung1801.2003@gmail.com";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <Box bgColor="gray.900" mt="auto">
            <Container maxW="container.xl" display="flex" flexDir="column">
                <HStack my="1rem" justifyContent="center">
                    <IconButton
                        icon={<GithubLogo size="1.2em" />}
                        href="https://github.com/hoangtrung1801"
                    />
                    <IconButton
                        icon={<FacebookLogo size="1.2em" />}
                        href="https://facebook.com/trung181"
                    />
                    <IconButton
                        icon={<InstagramLogo size="1.2em" />}
                        href="https://instagram.com/hoangtrung1801"
                    />
                    <IconButton icon={<EnvelopeSimple size="1.2em" />} />
                </HStack>
                <VStack mb="1rem">
                    <Text color="#a0aec0" fontSize="0.75em">
                        {description}
                    </Text>
                    <Text color="#a0aec0" fontSize="0.75em"></Text>
                </VStack>
            </Container>
        </Box>
    );
};

export default Footer;
