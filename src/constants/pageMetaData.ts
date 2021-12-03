import { PageMetaDataImage } from "../components/Head";

export const TITLE = "Infograph test";
export const URL = "https://infograph-next-test.vercel.app/";
export const DESCRIPTION =
    "Simple nextjs website for testing infograph metadata.";
export const KEYWORDS = ["infograph", "nextjs", "simple project", "metadata"];
export const SITE_NAME = "Infograph Next";
export const IMAGE: PageMetaDataImage = {
    src: "/default_page_image.png",
    width: "680",
    height: "610",
    type: "image/png",
};

export const ROOT_URL_DEV =
    process.env.ROOT_URL_DEV ?? process.env.NEXT_PUBLIC_ROOT_URL_DEV;
export const ROOT_URL = process.env.ROOT_URL ?? process.env.NEXT_PUBLIC_ROOT_URL;

export const BASE_URL =
    process.env.NODE_ENV === "development" ? ROOT_URL_DEV : ROOT_URL;
