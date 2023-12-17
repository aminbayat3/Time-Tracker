import { Kanban, KanbanData } from "./kanban-data"

export const selectKanbanMap = (kanbanData: KanbanData[]) => {
    return kanbanData.reduce((acc, data) => {
        const { column, tasks } = data;
        acc['columns'] = {...acc['columns'], [column.id]: column}; 
        tasks.forEach(task => (acc['tasks'] = {...acc['tasks'], [task.id]: task}));
        return acc;
    }, {} as Kanban)
}