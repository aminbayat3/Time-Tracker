import { FC } from "react";
import Paper from "@mui/material/Paper";
import { Draggable } from "react-beautiful-dnd";

import { TasksData } from "./kanban-data";

export type KanbanTaskProps = {
  task: TasksData;
  index: number;
};

const KanbanTask: FC<KanbanTaskProps> = ({ task, index }) => {
  return (
    <Draggable index={index} draggableId={task.id}>
      {(provided) => (
        <Paper
          sx={{ p: "15px", m: "25px auto" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </Paper>
      )}
    </Draggable>
  );
};

export default KanbanTask;
