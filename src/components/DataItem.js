import React from "react";

//Style
import { ArrowPic, Box, InfoAge, InfoDate, InfoDescription } from "../styles";

//data
import data from "../data";
const DataItem = (props) => {
  const dataLength = data.length;

  return (
    <div>
      <Box>
        <InfoDate>{props.info.date}</InfoDate>
        <InfoDescription>{props.info.description}</InfoDescription>
        <InfoAge>{props.info.age}</InfoAge>
      </Box>
      {dataLength === props.info.id ? (
        ""
      ) : (
        <ArrowPic alt={props.info.date} src={props.info.image} />
      )}
    </div>
  );
};
export default DataItem;
