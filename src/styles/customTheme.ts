import { extendTheme } from "@chakra-ui/react";
import { ThemeComponentProps } from "@chakra-ui/theme";

const customTheme = {
    styles: {
        global: (props: ThemeComponentProps) => ({
            body: {
                margin: 0,
                padding: 0,
            },
        }),
    },
};

export default extendTheme(customTheme);
