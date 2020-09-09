import React, { useEffect } from "react";
import styled from "styled-components/native";
import { COLOR } from "../utils/constants";
import { RootStackParamList } from "../App";
import { RouteProp } from "@react-navigation/native";

const ContainerRoot = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DirectionText = styled.Text`
  font-size: 30px;
  color: ${COLOR.BLACK};
`;
interface Props {
  route: RouteProp<RootStackParamList, "OrderList">;
}

const OrderList: React.FC = ({ route }: Props) => {
  return (
    <ContainerRoot>
      <DirectionText>{route.params.path}</DirectionText>
    </ContainerRoot>
  );
};

export default OrderList;
