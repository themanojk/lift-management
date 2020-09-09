import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { COLOR } from "../utils/constants";
import { FloorDirection, Floor } from "../types";

type Props = {
  floor: Floor;
  onClick: (floor: Floor) => void;
};

const RootContainer = styled.TouchableOpacity`
  display: flex;
  flex: 0.45;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px;
`;

const FloorNumber = styled.Text`
  font-weight: bold;
  color: ${COLOR.BLACK};
  font-size: 17px;
  letter-spacing: 1px;
`;

const UpArrow = require("../assets/images/arrow.png");
const DownArrow = require("../assets/images/down-arrow.png");

const LiftButton: React.FC<Props> = ({ floor, onClick }: Props) => {
  return (
    <RootContainer onPress={() => onClick(floor)}>
      {floor.direction === FloorDirection.UP ? (
        <Image source={UpArrow} style={{ height: 24, width: 24 }} />
      ) : (
        <Image source={DownArrow} style={{ height: 24, width: 24 }} />
      )}

      <FloorNumber>Lift Floor {floor.floor}</FloorNumber>
    </RootContainer>
  );
};
export default LiftButton;
