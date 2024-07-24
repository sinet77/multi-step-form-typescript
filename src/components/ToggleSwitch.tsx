import { Switch } from "@mui/material";

export const ToggleSwitch = ({
  onChange,
  mode,
}: {
  onChange: () => void;
  mode: "yearly" | "monthly";
}) => {
  return (
    <div className="toggle">
      <div className="bold-text">Monthly</div>
      <Switch onChange={onChange} checked={mode === "yearly"} />
      <div className="bold-text">Yearly</div>
    </div>
  );
};
