import { Box, Text } from "@chakra-ui/layout";
import React from "react";

interface InfoPlateProps {
    title?: string | null;
    text?: string | null;
}

const InfoPlate: React.FC<InfoPlateProps> = (props) => {
    const { title = null, text = null } = props;

    return (
        <Box
            color="white"
            bgColor="whiteAlpha.200"
            p="4"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="whiteAlpha.400"
        >
            <Text fontWeight="bold" fontSize="xl" mb="3">{title}</Text>
            {text}
        </Box>
    );
};

export default InfoPlate;
