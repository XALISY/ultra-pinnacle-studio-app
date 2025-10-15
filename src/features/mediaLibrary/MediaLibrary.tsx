import { Grid, Paper, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const LibraryContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const MediaItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function MediaLibrary() {
  return (
    <LibraryContainer>
      <Typography variant="h6" gutterBottom>
        Media Library
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <MediaItem>
            <IconButton>
              <FolderIcon />
            </IconButton>
            <Typography variant="caption">
              Projects
            </Typography>
          </MediaItem>
        </Grid>
        <Grid item xs={3}>
          <MediaItem>
            <IconButton>
              <ImageIcon />
            </IconButton>
            <Typography variant="caption">
              Images
            </Typography>
          </MediaItem>
        </Grid>
        <Grid item xs={3}>
          <MediaItem>
            <IconButton>
              <VideoFileIcon />
            </IconButton>
            <Typography variant="caption">
              Videos
            </Typography>
          </MediaItem>
        </Grid>
        <Grid item xs={3}>
          <MediaItem>
            <IconButton>
              <MusicNoteIcon />
            </IconButton>
            <Typography variant="caption">
              Audio
            </Typography>
          </MediaItem>
        </Grid>
      </Grid>
    </LibraryContainer>
  );
}