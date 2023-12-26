import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const TaskPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isDragging",
})<{
  isDragging?: boolean;
}>(({ theme, isDragging }) => ({
  padding: theme.spacing(2),
  margin: "25px auto",
  backgroundColor: `${isDragging ? theme.palette.divider : "auto"}`
}));
