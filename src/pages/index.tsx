import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PageMetaData } from "../components/Head";

import Layout from "../components/Layout";
import SvgInfograph from "../components/svg/SvgInfograph";
import { BASE_URL } from "../constants/pageMetaData";

const metaData: PageMetaData = {
    image: [
        {
            src: `${BASE_URL}/infograph_ideal.png`,
            type: "image/png",
        },
    ],
};

const Home: NextPage = () => {
    return (
        <Layout meta={metaData}>
            <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "6xl" }}
                color="white"
                textAlign="center"
                mt="10"
                mb={{ base: 12, sm: 14 }}
            >
                Cell structure
            </Heading>
            <Box maxW="500px" w="100%" mx="auto">
                <SvgInfograph></SvgInfograph>
            </Box>
        </Layout>
    );
};

export default Home;
