import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import LiftButton from "../components/LiftButton";
import CurrentFloor from "../components/CurrentFloor";
import { COLOR } from "../utils/constants";
import { FLOORS, Floor, FloorDirection } from "../types";
import { decideFloorPath } from "../lib/floorService";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

const Wrapper = styled.View`
  flex: 1;
`;
const ContainerRoot = styled.ScrollView`
  flex: 0.93;
`;
const LiftView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
`;

const ButtonView = styled.View`
  flex: 0.7;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
`;

const ShowOrderButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLOR.PRIMARY};
  flex: 0.07;
  width: 100%;
  border-radius: 2px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: ${COLOR.WHITE};
`;

const Home: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [selectedFloor, setSelectedFloor] = useState<Floor[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const navigateToOrderList = () => {
    const path = decideFloorPath(selectedFloor);
    setCurrentFloor(0);
    setSelectedFloor([]);

    //navigate to next page with this path
    navigation.navigate("OrderList", { path: path.join(" < ") });
  };

  const handleFloorSelection = (floor: Floor): void => {
    setSelectedFloor([...selectedFloor, floor]);
  };

  useEffect(() => {
    console.warn(currentFloor);
  }, [currentFloor]);

  return (
    <Wrapper>
      <ContainerRoot>
        {FLOORS.map((row) => {
          return (
            <LiftView>
              <CurrentFloor active={row === currentFloor ? 1 : 0} />
              {row !== 0 && row !== 6 ? (
                <ButtonView>
                  <LiftButton
                    onClick={handleFloorSelection}
                    floor={{ floor: row, direction: FloorDirection.UP }}
                  ></LiftButton>
                  <LiftButton
                    onClick={handleFloorSelection}
                    floor={{ floor: row, direction: FloorDirection.DOWN }}
                  ></LiftButton>
                </ButtonView>
              ) : row === 6 ? (
                <ButtonView>
                  <LiftButton
                    onClick={handleFloorSelection}
                    floor={{ floor: row, direction: FloorDirection.UP }}
                  ></LiftButton>
                </ButtonView>
              ) : (
                <ButtonView>
                  <LiftButton
                    onClick={handleFloorSelection}
                    floor={{ floor: row, direction: FloorDirection.UP }}
                  ></LiftButton>
                </ButtonView>
              )}
            </LiftView>
          );
        })}
      </ContainerRoot>
      <ShowOrderButton onPress={navigateToOrderList}>
        <ButtonText>Start Run</ButtonText>
      </ShowOrderButton>
    </Wrapper>
  );
};

export default Home;
