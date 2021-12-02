import { Flex, Text } from "@chakra-ui/layout";
import { InfographItem } from "./Infograph";
import { css, keyframes } from "@emotion/react";


export interface InfographItem1Props extends InfographItem {
    top: number;
    left: number;
}

const spin = keyframes`
    0%{
        opacity: 1;
        transform: rotate(-120deg);
    }
    100% {
        opacity: 0;
    }
`;

const InfographItem1: React.FC<InfographItem1Props> = (props) => {
    const { title = null, top = 0, left = 0 } = props;

    return (
        <Flex
            align="center"
            justify="center"
            borderRadius="50%"
            bgColor="gray.100"
            w="100px"
            h="100px"
            pos="absolute"
            top={`${top}px`}
            left={`${left}px`}
            css={css`
            animation: ${spin} cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s reverse forwards;
        `}
        >
            {title !== null && <Text as="span">{title}</Text>}
        </Flex>
    );
};

export default InfographItem1;
