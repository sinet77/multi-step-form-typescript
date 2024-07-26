import { Switch } from "@mui/material";

export const ToggleSwitch = ({
  onChange,
  selectedMode,
}: {
  onChange: () => void;
  selectedMode: "yearly" | "monthly";
}) => {
  return (
    <div className="toggle">
      <div className="bold-text">Monthly</div>
      <Switch onChange={onChange} checked={selectedMode === "yearly"} />
      <div className="bold-text">Yearly</div>
    </div>
  );
};
