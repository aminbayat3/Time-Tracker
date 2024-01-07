import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export const TaskPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isDragging",
})<{
  isDragging?: boolean;
}>(({ theme, isDragging }) => ({
  padding: theme.spacing(2),
  margin: "25px auto",
  backgroundColor: `${isDragging ? theme.palette.divider : "auto"}`,
}));

export const KanbanBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDraggingOver",
})<{
  isDraggingOver?: boolean;
}>(({ theme, isDraggingOver }) => ({
  padding: theme.spacing(2),
  flexGrow: 1,
  minHeight: '100px', 
  backgroundColor: isDraggingOver ? `${theme.palette.secondary.dark}` : "auto",
  transition: 'all 0.3s ease',
}));

export const KanbanColumnPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});