import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import Head, { PageHeadProps } from "./Head";

interface LayoutProps {
    meta?: PageHeadProps;
}

const Layout: NextPage<LayoutProps> = (props) => {
    const { children, meta = {} } = props;

    return (
        <Box>
            <Head {...meta} />
            <Box>{children}</Box>
        </Box>
    );
};

export default Layout;
