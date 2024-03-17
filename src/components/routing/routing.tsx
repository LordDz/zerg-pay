import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { PageText } from "@/pages/text/pageText";
import { PageArray } from "@/pages/array/pageArray";
import { PagePayement } from "@/pages/payment/pagePayement";

const RoutingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const Btn = styled.button<{ interactable: number }>`
  display: inline-block;
  font-size: 1em;
  display: block;
  background-color: ${(p) => (p.interactable === 1 ? "purple" : "#808080ab")};
  border: 2px solid ${(p) => (p.interactable === 1 ? "#6c26a7" : "#80808000")};
  border-radius: 3px;
`;

const BtnLabel = styled.label<{ interactable: number }>`
  color: ${(p) => (p.interactable === 1 ? "white" : "#6e6e6e")};
`;

// Extremely basic routing since I don't have time to implement a routing system
export const Routing: FunctionComponent<{}> = () => {
  const [page, setPage] = useState<number>(1);

  const onClickBtn = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <RoutingContainer>
        <Btn interactable={page !== 1 ? 1 : 0} onClick={() => onClickBtn(1)}>
          <BtnLabel interactable={page !== 1 ? 1 : 0}>1. Text</BtnLabel>
        </Btn>

        <Btn interactable={page !== 2 ? 1 : 0} onClick={() => onClickBtn(2)}>
          <BtnLabel interactable={page !== 2 ? 1 : 0}>2. Array</BtnLabel>
        </Btn>

        <Btn interactable={page !== 3 ? 1 : 0} onClick={() => onClickBtn(3)}>
          <BtnLabel interactable={page !== 3 ? 1 : 0}>3. Card</BtnLabel>
        </Btn>
      </RoutingContainer>

      {page == 1 && <PageText />}
      {page == 2 && <PageArray />}
      {page == 3 && <PagePayement />}
    </>
  );
};
