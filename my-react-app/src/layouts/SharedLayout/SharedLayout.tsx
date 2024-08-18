import { ReactNode } from "react";
import * as SC from "../LayoutsStyled";

type LayoutProps = {
  children: ReactNode;
};

const SharedLayout: React.FC<LayoutProps> = ({ children }) => {
  return <SC.SharedLayoutStyled>{children}</SC.SharedLayoutStyled>;
};

export default SharedLayout;
