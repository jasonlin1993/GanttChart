import React, { useState } from "react";
import { StyledEditTaskDurationColorBlock } from "../styles/TaskInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";

const ColorBlock = ({
  color,
  isSelected,
  handleColorSelect,
  width,
  $hoverColor,
  $borderRadius,
}) => {
  const [showCircleIcon, setShowCircleIcon] = useState(false);

  return (
    <StyledEditTaskDurationColorBlock
      color={color}
      onClick={() => handleColorSelect(color)}
      onMouseEnter={() => setShowCircleIcon(true)}
      onMouseLeave={() => setShowCircleIcon(false)}
      width={width}
      $hoverColor={$hoverColor}
      $borderRadius={$borderRadius}
    >
      {isSelected ? (
        <FontAwesomeIcon icon={faCheck} fontSize="1rem" color="black" />
      ) : (
        showCircleIcon && (
          <FontAwesomeIcon icon={faCircle} fontSize="0.5rem" color="white" />
        )
      )}
    </StyledEditTaskDurationColorBlock>
  );
};

export default ColorBlock;
