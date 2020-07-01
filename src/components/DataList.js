import React from "react";

//Component
import DataItem from "./DataItem";

//Data
import data from "../data";

const datalist = () => {
  const datalist = data.map((info) => <DataItem info={info} key={info.id} />);

  return <div>{datalist}</div>;
};

export default datalist;
