import { Box, Button, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "phosphor-react";

interface ThemeButtonProps {}

const ThemeButton: React.FC<ThemeButtonProps> = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button size={"md"} onClick={toggleColorMode}>
            {colorMode === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
    );
};

export default ThemeButton;
