import React from "react";

type PropsCommonTag = {
  title: string;
  data: string;
};
const CommonTag = ({ title, data }: PropsCommonTag) => {
  return (
    <div>
      <h2 className="text-primary text-xl">{title}</h2>
      <h3 className="text-lg">{data}</h3>
    </div>
  );
};

export default CommonTag;
