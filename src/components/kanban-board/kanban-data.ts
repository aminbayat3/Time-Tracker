export type ColumnData = { id: string, title: string, taskIds: string[]};

export type TasksData = { id: string, content: string };

type Task = {
  [key: string]: TasksData
};

type Column = {
  [key: string]: ColumnData
};

export type Kanban = {
  tasks: Task;
  columns: Column;
  columnOrder: string[];
};

export const KANBAN_DATA: Kanban = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favourite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
    "task-5": { id: "task-5", content: "Call my Mom" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export type KanbanData = {
    column: ColumnData,
    tasks: TasksData[],
}

export const KANBAN_INITIAL_STATE: KanbanData[] = [{
  column: {} as ColumnData,
  tasks: [],
}];

