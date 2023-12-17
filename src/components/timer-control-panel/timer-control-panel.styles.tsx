import { styled } from "@mui/material/styles";
import Grid from '@mui/system/Unstable_Grid';
import Paper from "@mui/material/Paper";

export const TimerPanelGrid = styled(Grid)(({ theme }) => ({
    margin: theme.spacing(4, 'auto'),
}));

export const TimerPanelPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(10), // we need to change this padding later on
}));
