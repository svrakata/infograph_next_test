import React from "react";
import NextHead from "next/head";
import {
    DESCRIPTION,
    IMAGE,
    KEYWORDS,
    SITE_NAME,
    TITLE,
    URL,
} from "../constants/pageMetaData";

export type ImageMimeTypes =
    | "image/gif"
    | "image/jpeg"
    | "image/png"
    | "image/svg+xml"
    | "image/webp";

export interface PageMetaDataImage {
    src: string;
    width?: string;
    height?: string;
    type?: ImageMimeTypes;
}

export interface PageMetaData {
    title?: string;
    url?: string;
    description?: string;
    siteName?: string;
    keywords?: string[];
    updatedTime?: string;
    image?: PageMetaDataImage[];
}

export interface PageHeadProps extends PageMetaData {
    noRobots?: boolean;
}

const Head: React.FC<PageHeadProps> = (props) => {
    const {
        title = TITLE,
        url = URL,
        description = DESCRIPTION,
        keywords = KEYWORDS,
        siteName = SITE_NAME,
        image = [IMAGE],

        updatedTime = null,
    } = props;

    return (
        <NextHead>
            <meta charSet="utf-8" />

            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(",")} />
            <link rel="canonical" href={url} />

            {/* open graph */}
            <meta property="fb:app_id" content="2945760205462000" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {image.map((im, i) => {
                const {
                    src = null,
                    width = null,
                    height = null,
                    type = null,
                } = im;

                return (
                    <React.Fragment key={i}>
                        {src !== null && (
                            <meta property="og:image" content={src} />
                        )}
                        {width !== null && (
                            <meta property="og:image:width" content={width} />
                        )}
                        {height !== null && (
                            <meta property="og:image:height" content={height} />
                        )}
                        {type !== null && (
                            <meta property="og:image:type" content={type} />
                        )}
                    </React.Fragment>
                );
            })}

            {updatedTime !== null && (
                <meta property="og:updated_time" content={updatedTime} />
            )}
        </NextHead>
    );
};

export default Head;
