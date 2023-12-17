import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import KanbanColumn from "./kanban-column.component";

import { KANBAN_DATA, KANBAN_INITIAL_STATE, KanbanData } from "./kanban-data";
import { selectKanbanMap } from "./kanban.utils";

const KanbanBoard = () => {
  const [kanbanData, setKanbanData] =
    useState<KanbanData[]>(KANBAN_INITIAL_STATE);

  useEffect(() => {
    const newKanbanData = KANBAN_DATA.columnOrder.map((columnId) => {
      const column = KANBAN_DATA.columns[columnId];
      const tasks = column.taskIds.map((taskId) => KANBAN_DATA.tasks[taskId]);
      return { column, tasks };
    });

    setKanbanData(newKanbanData);
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const mappedKanbanData = selectKanbanMap(kanbanData);
    const column = mappedKanbanData.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newTasks = newColumn.taskIds.map(
      (taskId) => mappedKanbanData.tasks[taskId]
    );
    const newKanbanData = kanbanData.map((data) => {
      if (data.column.id === newColumn.id) {
        return { column: newColumn, tasks: newTasks };
      }
      return data;
    });
    console.log(newKanbanData);
    setKanbanData(newKanbanData);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container sx={{ width: "85%", margin: "0 auto" }}>
        {kanbanData.map(({ column, tasks }, idx) => {
          return (
            <KanbanColumn
              key={`${column.id}-${idx}`}
              column={column}
              tasks={tasks}
            />
          );
        })}
      </Grid>
    </DragDropContext>
  );
};

export default KanbanBoard;
