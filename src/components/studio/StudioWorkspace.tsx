import { Box, Grid, Heading, useColorModeValue } from '@chakra-ui/react';
import Timeline from '../../features/timeline/Timeline';
import MediaLibrary from '../../features/mediaLibrary/MediaLibrary';

const StudioWorkspace: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const previewBg = useColorModeValue('gray.100', 'gray.900');

export default function StudioWorkspace() {
  return (
    <Box p={6} bg={bg}>
      <Heading as="h1" mb={4}>
        Studio Workspace
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6}>
        <Box gridColumn="1 / -1">
          <Box
            h="400px"
            bg={previewBg}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Media Preview Area
          </Box>
        </Box>
        <Box>
          <Timeline />
        </Box>
        <Box>
          <MediaLibrary />
        </Box>
      </Grid>
    </Box>
  );
}