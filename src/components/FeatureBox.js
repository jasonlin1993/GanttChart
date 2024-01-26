import FeatureBoxStyled from "@/styles/FeatureBox.styled";
import AddTask from "./AddTask";
import ChooseMonthAndYear from "./ChooseMonthAndYear";
import AddTaskDuration from "@/components/AddTaskDuration";
export default function FeatureBox() {
  return (
    <>
      <FeatureBoxStyled>
        <AddTask />
        <AddTaskDuration />
      </FeatureBoxStyled>
    </>
  );
}
