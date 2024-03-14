import React, { FunctionComponent } from "react";

export const Logo: FunctionComponent<{
  icon: string;
}> = ({ icon }) => {
  return <label>{icon}</label>;
};
