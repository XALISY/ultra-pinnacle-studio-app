import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.grey[900],
}));

const TimelineTrack = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.grey[800],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
  overflowX: 'auto',
  display: 'flex',
  alignItems: 'center',
}));

export default function Timeline() {
  return (
    <TimelineContainer>
      <Typography variant="h6" color="textSecondary">
        Timeline
      </Typography>
      <TimelineTrack>
        {/* Timeline items will be rendered here */}
        <Typography color="textSecondary">
          Drag and drop media here
        </Typography>
      </TimelineTrack>
    </TimelineContainer>
  );
}