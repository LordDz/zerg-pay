import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`;

export const CardColumn: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  return <Container>{children}</Container>;
};
