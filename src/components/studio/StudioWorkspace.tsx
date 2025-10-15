import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Timeline from '../../features/timeline/Timeline';
import MediaLibrary from '../../features/mediaLibrary/MediaLibrary';

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
          <Timeline />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaLibrary />
        </Grid>
      </Grid>
    </StudioContainer>
  );
}