import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
    nav?: React.ReactNode | null;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, nav }) => {
    return (
        <Flex minH="100vh" flexDirection="column">
            {!nav && <Navigation />}
            {nav && nav}
            <Container maxW="container.lg" flexGrow={1} my={"80px"} py="1rem">
                {children}
            </Container>
            <Footer />
        </Flex>
    );
};

export default Layout;
