import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const CardOuter = styled.div`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://img.freepik.com/free-photo/vibrant-colors-flow-abstract-wave-pattern-generated-by-ai_188544-9781.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710374400&semt=ais);
  border-radius: 10px;
  min-width: 300px;
  max-width: 25em;
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
`;

export const Card: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <CardOuter className="card">
      <CardInner>{children}</CardInner>
    </CardOuter>
  );
};
