import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { css, keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import InfographItem1 from "./InfographItem1";

export interface InfographItem {
    icon: string;
    title: string;
}

export interface IInfograph {
    image: string;
    items: InfographItem[];
}

export interface InfographProps {
    image: string;
    items: InfographItem[];
}
const spin = keyframes`
    100% {
        transform: rotate(120deg);
    }
`;

const Infograph: React.FC<InfographProps> = (props) => {
    const { image = null, items = [] } = props;
    const containerRef = useRef<HTMLDivElement>(null);

    const [coords, setCoords] = useState<any>(null);

    useEffect(() => {
        const coords = (() => {
            const container = containerRef.current;
            if (container !== null) {
                const radius = 250;
                const { width, height } = container.getBoundingClientRect();
                let angle = 0;
                const step = (2 * Math.PI) / items.length;
                const coords = items.map(() => {
                    const x = Math.round(
                        width / 2 + radius * Math.cos(angle) - 100 / 2
                    );
                    const y = Math.round(
                        height / 2 + radius * Math.sin(angle) - 100 / 2
                    );
                    angle += step;
                    return { x, y };
                });
                return coords;
            }
            return null;
        })()

        if (coords !== null) {
            setCoords(coords)
        }
    }, [])

    return (
        <Flex
            align="center"
            justify="center"
            borderRadius="50%"
            bgColor="pink"
            h="400px"
            w="400px"
            pos="relative"
            ref={containerRef}
        >
            {image !== null && <Image src={image} />}
            <Box
                css={css`
                    animation: ${spin} 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
                `}
                w="100%"
                h="100%"
                pos="absolute"
            >
                {coords !== null &&
                    items.map((item, i) => (
                        <InfographItem1
                            key={i}
                            title={item.title}
                            icon={item.icon}
                            top={coords[i].y}
                            left={coords[i].x}
                        />
                    ))}
            </Box>
        </Flex>
    );
};

export default Infograph;
