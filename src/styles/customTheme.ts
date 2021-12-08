import { extendTheme } from "@chakra-ui/react";
import { ThemeComponentProps } from "@chakra-ui/theme";

const font = "'Readex Pro', sans-serif;";

const customTheme = {
    fonts: {
        heading: font,
        fontFamily: font,
        body: font,
    },
    styles: {
        global: (props: ThemeComponentProps) => ({
            body: {
                margin: 0,
                padding: 0,
                bgColor: "purple.900"
            },
        }),
    },
};

export default extendTheme(customTheme);
