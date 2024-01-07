import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { Kanban } from "./kanban-data";
import { getNewKanbanData } from "./kanban.utils";

import KanbanColumn from "./kanban-column.component";

import { KANBAN_DATA } from "./kanban-data";

const KanbanBoard = () => {
  const [kanbanData, setKanbanData] = useState<Kanban>(KANBAN_DATA);

  useEffect(() => {
    setKanbanData({ ...KANBAN_DATA });
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const newKanbanData = getNewKanbanData(kanbanData, result);

    newKanbanData && setKanbanData(newKanbanData);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={2} sx={{ width: "85%", margin: "70px auto" }}>
        {kanbanData.columnOrder.map((columnId) => {
          const column = kanbanData.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => kanbanData.tasks[taskId]
          );
          return <KanbanColumn key={uuidv4()} column={column} tasks={tasks} />;
        })}
      </Grid>
    </DragDropContext>
  );
};

export default KanbanBoard;
