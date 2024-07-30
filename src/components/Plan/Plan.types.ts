export type PlanProps = {
  title: string;
  icon: string;
  price: string;
  bonus?: string;
  onSelect: () => void;
  isHighlighted?: boolean;
};
