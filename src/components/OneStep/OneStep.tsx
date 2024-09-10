import { StepProps } from "./OneStep.types";

// TODO: przepisz komponent na MUI
export const Step = ({ number, info, isSelected }: StepProps) => {
  return (
    <div className="step">
      <div className={`circleButton ${isSelected && "selectedCircle"}`}>
        {number}
      </div>
      <div className="stepMain">
        <div className="stepText1">STEP {number}</div>
        <div className="stepText2">{info}</div>
      </div>
    </div>
  );
};
