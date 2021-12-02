import { Flex } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Infograph, { IInfograph } from "../components/infograph/Infograph";

import Layout from "../components/Layout";

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

const Home: NextPage = () => {
    return (
        <Layout>
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
