import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

import { TaskPaper } from "./kanban.styles";
import { TasksData } from "./kanban-data";

export type KanbanTaskProps = {
  task: TasksData;
  index: number;
};

const KanbanTask: FC<KanbanTaskProps> = ({ task, index }) => {
  return (
    <Draggable index={index} draggableId={`${task.id}`}>
      {(provided, snapshot) => (
        <TaskPaper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskPaper>
      )}
    </Draggable>
  );
};

export default KanbanTask;
