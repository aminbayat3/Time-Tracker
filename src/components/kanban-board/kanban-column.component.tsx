import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { Droppable } from "react-beautiful-dnd";
import KanbanTask from "./kanban-task.component";

import { ColumnData, TasksData } from "./kanban-data";

export type KanbanColumnProps = {
  column: ColumnData;
  tasks: TasksData[];
};

const KanbanColumn: FC<KanbanColumnProps> = ({ column, tasks }) => {
  return (
    <Grid item xs={4}>
      <Paper>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {column.title}
        </Typography>
        <Droppable droppableId={`${column.id}`} >
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, idx) => (
                <KanbanTask key={uuidv4()} task={task} index={idx} />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Paper>
    </Grid>
  );
};

export default KanbanColumn;
