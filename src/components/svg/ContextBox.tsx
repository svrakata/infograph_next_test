import { Box, Text } from "@chakra-ui/layout";
import React from "react";

interface ContentBoxProps {
    title: string | null;
    text: string | null;
}

const ContextBox: React.FC<ContentBoxProps> = (props) => {
    const { title, text } = props;

    if (title === null && text === null) {
        return null;
    }

    return (
        <Box p="3" borderRadius="md" bgColor="gray.100" color="gray.800" maxW="200px">
            <Text fontWeight="bold" mb="2">
                {title}
            </Text>
            <Text fontSize="sm" lineHeight="shorter">{text}</Text>
        </Box>
    );
};

export default ContextBox;
