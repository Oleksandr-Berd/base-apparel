import * as SC from "./LogoStyled";

import data from "../../db/db.json";
import Circle from "./Circle";

const Logo: React.FC = () => {
  const { logo } = data;

  const logoSplitted = logo.split(" ");

  const logoRender = logoSplitted.map((el, idx, arr) => {
    if (idx === arr.length - 1) return <>{el}</>;

    return (
      <>
        {el} <pre style={{ margin: "3px 0px" }} />
      </>
    );
  });

  return (
    <>
      <SC.LogoCon>
        <Circle />
        <h1>{logoRender}</h1>
      </SC.LogoCon>
    </>
  );
};

export default Logo;
