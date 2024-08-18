import { useMediaQuery } from "usehooks-ts"

export const useWindowSize = () => {
    const isDesktop = useMediaQuery("(min-width:1280px)");
    const isTablet = useMediaQuery("(min-width:768px)");
    const isMobile = useMediaQuery("(max-width:767px)");

    return {isDesktop, isMobile, isTablet}
}