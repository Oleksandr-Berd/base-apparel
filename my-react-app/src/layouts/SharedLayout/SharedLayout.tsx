import { ReactNode } from "react";

type LayoutProps = {
    children:ReactNode
}

const SharedLayout:React.FC<LayoutProps> = ({children}) => {
    return ( <div>
{children}
    </div> );
}
 
export default SharedLayout;