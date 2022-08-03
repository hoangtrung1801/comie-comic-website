import { Heading, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
    return (
        <Heading size={"2xl"} fontWeight="extrabold">
            <Link href="/">
                <LinkChakra
                    _hover={{ textDecor: "none" }}
                    bgClip="text"
                    bgGradient="linear(to-b, orange.400, orange.600)"
                >
                    COMIE
                </LinkChakra>
            </Link>
        </Heading>
    );
};

export default Logo;
