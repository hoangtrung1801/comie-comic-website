import {
    ComponentStyleConfig,
    extendTheme,
    type ThemeConfig,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
});

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const colors = {};

const HeadingComponentStyle: ComponentStyleConfig = {
    variants: {
        title: {
            fontSize: "2xl",
            pl: "1rem",
            pos: "relative",
            "&::before": {
                content: `''`,
                width: "8px",
                height: "full",
                // bg: 'linear-gradient(180deg,var(--heading_custom_border_color_1,#f80),var(--heading_custom_border_color_2,#ea3c2a))',
                position: "absolute",
                top: "0",
                left: "0",
                borderRadius: "1rem",
                bgGradient: "linear(to-b, orange.400, orange.600)",
            },
        },
    },
};

const ButtonComponentStyle: ComponentStyleConfig = {
    variants: {
        type1: {
            minW: "8rem",
            bgGradient: "linear(to-r, orange.400, orange.600)",
            textTransform: "uppercase",
            letterSpacing: "0.25px",
            fontWeight: "semibold",
            py: "12px",
        },
    },
};

const theme = extendTheme({
    colors,
    fonts,
    breakpoints,
    config,
    components: {
        Heading: HeadingComponentStyle,
        Button: ButtonComponentStyle,
    },
});

export default theme;
