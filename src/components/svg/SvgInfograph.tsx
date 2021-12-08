import { Box, VStack } from "@chakra-ui/layout";
import { CSSProperties } from "@emotion/serialize";
import React, { useEffect, useRef, useState } from "react";
import ContextBox from "./ContextBox";
import InfoPlate from "./InfoPlate";
import SVG from "./SVG";

export interface AttachedEvent {
    element: SVGElement;
    type: "click" | "mouseover";
    detachEvents: () => void;
}

export interface InfographEventInfo {
    title: string;
    text: string;
}

export interface InfographEvent {
    type: "click" | "mouseover";
    info: InfographEventInfo;
}

export interface InfographInteraction {
    selector: string;
    events: InfographEvent[];
}

const interactions: InfographInteraction[] = [
    {
        selector: "#selector-1",
        events: [
            {
                type: "mouseover",
                info: {
                    title: "Lysosome",
                    text: "A sac-like compartment inside a cell that has enzymes that can break down cellular components that need to be destroyed.",
                },
            },
            {
                type: "click",
                info: {
                    title: "Lysosome",
                    text: "A sac-like compartment inside a cell that has enzymes that can break down cellular components that need to be destroyed.",
                },
            },
        ],
    },
    {
        selector: "#selector-2",
        events: [
            {
                type: "mouseover",
                info: {
                    title: "Mitochondrion",
                    text: "Any of various round or long cellular organelles of most eukaryotes that are found outside the nucleus, produce energy for the cell through cellular respiration, and are rich in fats, proteins, and enzymes.",
                },
            },
            {
                type: "click",
                info: {
                    title: "Mitochondrion",
                    text: "Any of various round or long cellular organelles of most eukaryotes that are found outside the nucleus, produce energy for the cell through cellular respiration, and are rich in fats, proteins, and enzymes.",
                },
            },
        ],
    },
];

const SvgInfograph: React.FC = () => {
    const svgRef = useRef<SVGElement>(null);

    const [infoPlateTitle, setInfoPlateTitle] = useState<string | null>(null);
    const [infoPlateText, setInfoPlateText] = useState<string | null>(null);
    const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
    const [contentBoxTitle, setContentBoxTitle] = useState<string | null>(null)
    const [contentBoxText, setContentBoxText] = useState<string | null>(null)

    const clickEventHandler = (ev: Event, infographEvent: InfographEvent) => {
        setInfoPlateTitle(infographEvent.info.title);
        setInfoPlateText(infographEvent.info.text);
    };

    const mouseLeaveEventHandler = () => {
        setCoords(null);
    };

    const mouseEnterEventHandler = (
        ev: MouseEvent,
        infographEvent: InfographEvent
    ) => {
        const x = ev.clientX;
        const y = ev.clientY;
        setCoords({ x, y });
        setContentBoxTitle(infographEvent.info.title);
        setContentBoxText(infographEvent.info.text);
    };

    const attachEvents = (
        e: InfographEvent,
        element: SVGElement | null,
        svgElement: SVGElement
    ): AttachedEvent | null => {
        if (element !== null) {
            switch (e.type) {
                case "click":
                    const clickHandler = (ev: Event) =>
                        clickEventHandler(ev, e);
                    element.addEventListener(e.type, clickHandler);
                    return {
                        element,
                        type: e.type,
                        detachEvents: () => {
                            element.removeEventListener("click", clickHandler);
                        },
                    };
                case "mouseover":
                    const mouseEnterHandler = (ev: MouseEvent) => {
                        if (ev.target === element) {
                            mouseEnterEventHandler(ev, e);
                        }
                    };
                    element.addEventListener(
                        "mouseover",
                        mouseEnterHandler
                    );
                    const mouseLeaveHandler = (ev: MouseEvent) => {
                        if (ev.target === element) {
                            mouseLeaveEventHandler();
                        }
                    };
                    element.addEventListener(
                        "mouseleave",
                        mouseLeaveHandler
                    );
                    return {
                        element,
                        type: e.type,
                        detachEvents: () => {
                            element.removeEventListener(
                                "mouseenter",
                                mouseEnterHandler
                            );
                            element.removeEventListener(
                                "mouseleave",
                                mouseLeaveHandler
                            );
                        },
                    };
                default:
                    console.error(`Event of type ${e.type} doesn't exist.`);
                    return null;
            }
        }
        return null;
    };

    useEffect(() => {
        let attachedEvents: (AttachedEvent | null)[] = [];
        const svgElement = svgRef.current;
        if (svgElement !== null) {
            interactions.forEach((i) => {
                const element = svgElement.querySelector(
                    i.selector
                ) as SVGAElement;
                if (element === null) {
                    console.error(
                        `Element with selector ${i.selector} doesn't exist.`
                    );
                    return;
                }

                element.style.cursor = "pointer";
                attachedEvents = i.events.map((e) =>
                    attachEvents(e, element, svgElement)
                );
            });
        }

        return () => {
            attachedEvents.forEach((ae) => ae?.detachEvents());
        };
    }, [interactions, svgRef]);

    return (
        <VStack spacing={{base: 8, md: 12}}>
            <Box
                sx={{
                    svg: {
                        w: "full",
                        h: "full",
                    },
                }}
                w="100%"
            >
                <SVG ref={svgRef} />
            </Box>
            {(infoPlateText !== null || infoPlateTitle !== null) && (
                <InfoPlate title={infoPlateTitle} text={infoPlateText} />
            )}
            {coords !== null && (
                <Box
                    pos="fixed"
                    top={`${coords.y}px`}
                    left={`${coords.x}px`}
                >
                    <ContextBox title={contentBoxTitle} text={contentBoxText}/>
                </Box>
            )}
        </VStack>
    );
};

export default SvgInfograph;
