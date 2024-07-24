import { Checkbox } from "@mui/material";

type AddOnTypes = {
  title: string;
  info: string;
  price: string;
  onSelect: () => void;
  checked?: boolean;
};

export const AddOn = ({
  title,
  info,
  price,
  onSelect,
  checked,
}: AddOnTypes) => {
  return (
    <div className="check-box-item" onClick={onSelect}>
      <Checkbox className="check-box" checked={checked} size="small" />
      <div className="paragraph">
        <div className="title">{title}</div>
        <div className="sub-title">{info}</div>
      </div>
      <div className="up-price">{price}</div>
    </div>
  );
};
