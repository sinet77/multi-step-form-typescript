export type PlanTypes = {
  title: string;
  icon: string;
  price: string;
  bonus?: string;
  onSelect: () => void;
};

export const Plan = ({ title, icon, price, bonus, onSelect }: PlanTypes) => {
  return (
    <div className="planButton" onClick={onSelect}>
      <img src={icon} alt="" />
      <div className="buttonText">{title}</div>
      <div className="buttonPrice">{price}</div>
      <div className="freeMonths">{bonus}</div>
    </div>
  );
};
