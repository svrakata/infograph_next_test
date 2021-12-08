import { Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PageMetaData } from "../components/Head";
import Infograph, { IInfograph } from "../components/infograph/Infograph";

import Layout from "../components/Layout";
import SvgInfograph from "../components/svg/SvgInfograph";
import { BASE_URL } from "../constants/pageMetaData";

const IMAGE_SRC =
    "https://www.pngkit.com/png/full/136-1364547_turmeric-powder-prozac-natural-equivalent.png";

const infographData: IInfograph = {
    image: IMAGE_SRC,
    items: [
        {
            icon: "kkk",
            title: "Helps to reduce inflammation",
        },
        {
            icon: "kkk",
            title: "Helps to relieve arthritic pain",
        },
        {
            icon: "kkk",
            title: "Helps to heal stomach ulcers",
        },
        {
            icon: "kkk",
            title: "Helps to enhance respiratory health",
        },
        {
            icon: "kkk",
            title: "Helps to strengthen ligaments",
        },
        {
            icon: "kkk",
            title: "Is great for the skin",
        },
        {
            icon: "kkk",
            title: "Helps wounds heal faster",
        },
        // {
        //     icon: "kkk",
        //     title: "Helps improve brain function",
        // },
        // {
        //     icon: "kkk",
        //     title: "Reduces cholesterol",
        // },
        // {
        //     icon: "kkk",
        //     title: "Helps combat depression",
        // },
    ],
};

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
