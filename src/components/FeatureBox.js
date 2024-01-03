import FeaturBoxStyled from "@/styles/FeaturBox.styled";
import AddTask from "./AddTask";
import ChooseMonthAndYear from "./ChooseMonthAndYear";
export default function FeatureBox() {
  return (
    <>
      <FeaturBoxStyled>
        <AddTask />
        <ChooseMonthAndYear />
      </FeaturBoxStyled>
    </>
  );
}
