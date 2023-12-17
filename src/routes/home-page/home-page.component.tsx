import Grid from "@mui/system/Unstable_Grid";

import TimerControlPanel from "../../components/timer-control-panel/timer-control-panel.component";
import KanbanBoard from "../../components/kanban-board/kanban-board.component";

const HomePage = () => {
  return (
    <Grid container spacing={1}>
      <TimerControlPanel />
      <KanbanBoard />
    </Grid>
  );
};

export default HomePage;
