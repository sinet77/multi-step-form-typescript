import { PlanProps } from "./Plan.types";

export const Plan = ({
  title,
  icon,
  price,
  bonus,
  onSelect,
  highlighted,
}: PlanProps) => {
  return (
    <div className={"planButton " + highlighted} onClick={onSelect}>
      <img src={icon} alt="" />
      <div className="buttonText">{title}</div>
      <div className="buttonPrice">{price}</div>
      <div className="freeMonths">{bonus}</div>
    </div>
  );
};
