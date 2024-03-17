import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #0000004a;
  padding: 1em;
  border-radius: 2px;
  flex-direction: column;
  gap: 5px;
`;

export const CardCenter: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  return <Container>{children}</Container>;
};
