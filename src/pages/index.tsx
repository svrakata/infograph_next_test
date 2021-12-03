import { Flex } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { PageMetaData } from "../components/Head";
import Infograph, { IInfograph } from "../components/infograph/Infograph";

import Layout from "../components/Layout";
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
        {
            icon: "kkk",
            title: "Helps improve brain function",
        },
        {
            icon: "kkk",
            title: "Reduces cholesterol",
        },
        {
            icon: "kkk",
            title: "Helps combat depression",
        },
    ],
};

const metaData: PageMetaData = {
    image: [
        {
            src: `${BASE_URL}/infograph_1.jpg"`,
            // type: "image/jpg",
        },
        {
            src: `${BASE_URL}/infograph_2.jpg"`,
            // type: "image/jpg",
        },
        {
            src: `${BASE_URL}/infograph_3.jpg"`,
            // type: "image/jpg",
        },
        {
            src: `${BASE_URL}/infograph_4.jpg"`,
            // type: "image/jpg",
        },
        {
            src: `${BASE_URL}/infograph_5.jpg"`,
            // type: "image/png",
        },
    ],
};

const Home: NextPage = () => {
    return (
        <Layout meta={metaData}>
            <Flex align="center" justify="center" h="100vh">
                <Infograph
                    image={infographData.image}
                    items={infographData.items}
                />
            </Flex>
        </Layout>
    );
};

export default Home;
