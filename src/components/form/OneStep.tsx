type StepTypes = {
  number: number;
  info: string;
  isSelected?: boolean;
};

export const Step = ({ number, info, isSelected }: StepTypes) => {
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
