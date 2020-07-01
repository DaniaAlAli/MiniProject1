import React from "react";

//Style
import { ArrowPic, Box, InfoAge, InfoDate, InfoDescription } from "../styles";

const DataItem = (props) => {
  return (
    <div>
      <Box>
        <InfoDate>{props.info.date}</InfoDate>
        <InfoDescription>{props.info.description}</InfoDescription>
        <InfoAge>{props.info.age}</InfoAge>
      </Box>
      <ArrowPic alt={props.info.date} src={props.info.image} />
    </div>
  );
};
export default DataItem;
