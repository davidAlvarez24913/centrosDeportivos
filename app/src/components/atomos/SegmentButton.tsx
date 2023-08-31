import React from "react";

import { IonSegmentButton } from "@ionic/react";

type SegmentButtonProps = {
  text: string;
  customStyle?: {
    "--color": string;
    "--color-checked": string;
  };
} & React.ComponentProps<typeof IonSegmentButton>;
const SegmentButton = ({ text, customStyle }: SegmentButtonProps) => {
  return (
    <IonSegmentButton id={text} style={customStyle && customStyle} value={text}>
      {text.toUpperCase()}
    </IonSegmentButton>
  );
};

export default SegmentButton;
