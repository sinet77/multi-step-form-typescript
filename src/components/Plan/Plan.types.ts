export type PlanProps = {
  title: string;
  icon: string;
  price: string;
  bonus?: string;
  onSelect: () => void;
  highlighted?: string;
};
