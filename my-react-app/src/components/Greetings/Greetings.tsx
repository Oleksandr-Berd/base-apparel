import * as SC from "./GreetingsStyled";

import data from "../../db/db.json";
import { stressPart } from "../../utils/stressPart";

const Greetings: React.FC = () => {
  const { greeting, greetingText } = data;
  const stressed = greeting.split(" ")[0];
  const { leftArr } = stressPart(stressed, greeting);

  console.log(leftArr);

  return (
    <SC.GreetingsCon>
      <SC.Title>
        <span>{stressed}</span>
        <span>
        {leftArr}
        </span>
      </SC.Title>
      <p>{greetingText}</p>
    </SC.GreetingsCon>
  );
};

export default Greetings;
