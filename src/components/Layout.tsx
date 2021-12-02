import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import Head from "next/head";

const Layout: NextPage = (props) => {
    const { children } = props;

    return (
        <Box>
            <Head>
                <title>Infograph</title>
            </Head>

            <Box>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
