import React from "react";

import { IonSegment } from "@ionic/react";

import { SegmentButton } from "../../atomos";

type SegmentProps = {
  segmentList: string[];
  segment: string;
  setSegment: (segment: string) => void;
};
const Segment = ({ segmentList, segment, setSegment }: SegmentProps) => {
  return (
    <IonSegment
      className="bg-transparent"
      value={segment}
      onIonChange={(e) => {
        setSegment(e.detail.value! as string);
      }}
    >
      {segmentList.map((value) => (
        <SegmentButton text={value} key={value} />
      ))}
    </IonSegment>
  );
};

export default Segment;
