import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SlideProps {
    children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
    return (
        <Box as={motion.div}>
            <Box boxSize="full" shadow="md">
                {children}
            </Box>
        </Box>
    );
};

export default Slide;
