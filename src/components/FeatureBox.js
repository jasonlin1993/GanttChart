import FeaturBoxStyled from "@/styles/FeaturBox.styled";
import AddTask from "./AddTask";
import ChooseMonthAndYear from "./ChooseMonthAndYear";
import AddTaskDuration from "@/components/AddTaskDuration";
export default function FeatureBox() {
  return (
    <>
      <FeaturBoxStyled>
        <AddTask />
        <ChooseMonthAndYear />
        <AddTaskDuration />
      </FeaturBoxStyled>
    </>
  );
}
