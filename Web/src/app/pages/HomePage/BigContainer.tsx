import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin: 40px 30px 50px 30px;
  font-family: "Times New Roman", Times, serif !important;
  font-size: 42px;
  font-weight: bold;
  color: #2c3e50;
  letter-spacing: 1px;
`;

interface Props {
  title: ReactNode;
  children: ReactNode;
}

export default function BigContainer({ title, children}: Props) {
  return <div>
    <Title>{title}</Title>
    {children}
  </div>;
}
