import React, { useEffect, forwardRef } from "react";
import {
  StyledSaveDataToFireStorePopUp,
  StyledContent,
  StyledTextContainer,
  StyledButtonContainer,
  StyledCancelButton,
  StyledSaveTaskNameContainer,
  StyledSaveButton,
  StyledTaskNameInputDate,
  StyledErrorMessage,
} from "../styles/SaveToFirestorePopup.styled";

const SaveToFirestorePopup = forwardRef(
  (
    { isVisible, projectName, setProjectName, errorMessage, onSave, onCancel },
    ref
  ) => {
    useEffect(() => {
      if (isVisible && ref.current) {
        ref.current.showModal();
      }
    }, [isVisible, ref]);

    if (!isVisible) return null;

    return (
      <StyledSaveDataToFireStorePopUp ref={ref}>
        <StyledContent>
          <StyledTextContainer>另存新檔</StyledTextContainer>
        </StyledContent>
        <StyledSaveTaskNameContainer>
          專案名稱:
          <StyledTaskNameInputDate
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </StyledSaveTaskNameContainer>
        <StyledButtonContainer>
          <StyledCancelButton onClick={onCancel}>取消</StyledCancelButton>
          <StyledSaveButton onClick={onSave}>儲存</StyledSaveButton>
        </StyledButtonContainer>
        {errorMessage && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
      </StyledSaveDataToFireStorePopUp>
    );
  }
);

SaveToFirestorePopup.displayName = "SaveToFirestorePopup";

export default SaveToFirestorePopup;
