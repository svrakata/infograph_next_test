import { Box } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import SVG from "./SVG";

interface AttachedEvent {
    element: Element;
    type: "click" | "mouseover";
    handler: () => void;
}

interface InfographEvent {
    type: "click" | "mouseover";
    text: string;
}

interface InfographInteraction {
    selector: string;
    events: InfographEvent[];
}

const interactions: InfographInteraction[] = [
    {
        selector: "#interaction-1",
        events: [
            {
                type: "mouseover",
                text: "Some text to display on hover",
            },
            {
                type: "click",
                text: "Some information to display on click",
            },
        ],
    },
];


const SvgInfograph: React.FC = () => {
    const svgRef = useRef<SVGElement>(null);

    const [clickText, setClickText] = useState(null);

    const clickEventHandler = () => {};
    const mouseOverEventHandler = () => {};
    
    const attachEvents = (
        e: InfographEvent,
        element: Element | null
    ): AttachedEvent | null => {
        if (element !== null) {
            switch (e.type) {
                case "click":
                    element.addEventListener(e.type, clickEventHandler);
                    return {
                        element,
                        type: e.type,
                        handler: clickEventHandler,
                    };
                case "mouseover":
                    element.addEventListener(e.type, mouseOverEventHandler);
                    return {
                        element,
                        type: e.type,
                        handler: mouseOverEventHandler,
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
                const element = svgElement.querySelector(i.selector);
                if (element === null) {
                    console.error(
                        `Element with selector ${i.selector} doesn't exist.`
                    );
                    return;
                }
                attachedEvents = i.events.map((e) => attachEvents(e, element));
            });
        }

        return () => {
            attachedEvents.forEach((ae) =>
                ae?.element.removeEventListener(ae.type, ae.handler)
            );
        };
    }, [interactions, svgRef]);

    return (
        <Box>
            <SVG ref={svgRef} />
            {clickText !== null && <Box>{clickText}</Box>}
        </Box>
    );
};

export default SvgInfograph;
