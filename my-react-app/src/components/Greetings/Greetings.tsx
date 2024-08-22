import * as SC from "./GreetingsStyled";

import data from "../../db/db.json";
import { stressPart } from "../../utils/stressPart";

import FormComp from "../Form/From";

const Greetings: React.FC = () => {
  const { greeting, greetingText } = data;
  const stressed = greeting.split(" ")[0];
  const { leftArr } = stressPart(stressed, greeting);


  return (
    <SC.GreetingsCon>
      <SC.Title>
        <span>{stressed}</span>
        <span>
        {leftArr}
        </span>
      </SC.Title>
      <SC.Content>{greetingText}</SC.Content>
      <FormComp/>
    </SC.GreetingsCon>
  );
};

export default Greetings;
