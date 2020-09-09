import React from "react";
import styled from "styled-components/native";
import { COLOR } from "../utils/constants";

type Props = {
  active: number;
};

interface activeProp {
  active: number;
}

const RootContainer = styled.View`
  display: flex;
  flex: 0.3;
  height: 80px;
  ${(prop: activeProp) => {
    if (prop.active) {
      return "background-color: " + COLOR.SELECTED;
    } else {
      return "background-color: " + COLOR.GREY;
    }
  }}
`;

const CurrentFloor: React.FC<Props> = ({ active }: Props) => {
  return <RootContainer active={active}></RootContainer>;
};
export default CurrentFloor;
