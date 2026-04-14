import Switch from "react-switch";

export default function Toggle({ isActive, onToggle }) {
  return (
    <Switch
      checked={isActive}
      onChange={onToggle}
      onColor="crimson"
      offColor="#999"
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
}
