import { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Droppable } from "react-beautiful-dnd";
import KanbanTask from "./kanban-task.component";

import { KanbanBox, KanbanColumnPaper } from "./kanban.styles";

import { ColumnData, TasksData } from "./kanban-data";

export type KanbanColumnProps = {
  column: ColumnData;
  tasks: TasksData[];
};

const KanbanColumn: FC<KanbanColumnProps> = ({ column, tasks }) => {
  return (
    <Grid item xs={4}>
      <KanbanColumnPaper>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", paddingTop: '15px', flexGrow: 0 }}
        >
          {column.title}
        </Typography>
        <Droppable droppableId={`${column.id}`} >
          {(provided, snapshot) => (
            <KanbanBox ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              {tasks.map((task, idx) => (
                <KanbanTask key={task.id} task={task} index={idx} />
              ))}
              {provided.placeholder}
            </KanbanBox>
          )}
        </Droppable>
      </KanbanColumnPaper>
    </Grid>
  );
};

export default KanbanColumn;
