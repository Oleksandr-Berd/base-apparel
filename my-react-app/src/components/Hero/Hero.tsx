import * as SC from "./HeroStyled"

import heroImg from "../../assets/images/hero_opt.jpg"
import heroImgDesk from "../../assets/images/hero_desk.jpg"
import { useWindowSize } from "../../hooks/useWindowSize";

const Hero:React.FC = () => {
const {isDesktop} = useWindowSize()


    return ( <SC.ImgCon source={isDesktop? heroImgDesk : heroImg}>
    </SC.ImgCon> );
}
 
export default Hero;