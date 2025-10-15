import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StudioContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
}));

const MediaPreview = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  backgroundColor: theme.palette.grey[900],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function StudioWorkspace() {
  return (
    <StudioContainer>
      <Typography variant="h4" gutterBottom>
        Studio Workspace
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MediaPreview>
            <Typography color="text.secondary">
              Media Preview Area
            </Typography>
          </MediaPreview>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Timeline component will go here */}
          <Box sx={{ height: '150px', bgcolor: 'background.paper', p: 2, border: 1, borderColor: 'divider' }}>
            <Typography>Timeline</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Controls panel will go here */}
          <Box sx={{ height: '150px', bgcolor: 'background.paper', p: 2, border: 1, borderColor: 'divider' }}>
            <Typography>Controls</Typography>
          </Box>
        </Grid>
      </Grid>
    </StudioContainer>
  );
}