import { TimerPanelGrid, TimerPanelPaper } from "./timer-control-panel.styles";

const TimerControlPanel = () => {
  return (
    <TimerPanelGrid xs={8} xsOffset={2}>
      <TimerPanelPaper elevation={4}>HOME PAGE</TimerPanelPaper>
    </TimerPanelGrid>
  );
};

export default TimerControlPanel;
