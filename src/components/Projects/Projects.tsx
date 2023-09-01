import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { allProjects } from '../../helpers/projects';
import ProjectImg from './ProjectImg';
import Carousel from '../Carousel/Carousel';

const Projects = () => {
  const theme = useTheme();
  const screenIsTiny = useMediaQuery(theme.breakpoints.down('sm'));
  const userCanHover = useMediaQuery('(hover: hover) and (pointer: fine)');

  const MobileImages = () => {
    return (
      <Stack overflow={'auto'} spacing={3}>
        {allProjects.map((proj) => {
          return <ProjectImg projectDetails={proj} key={`proj-${proj.title}`} />;
        })}
      </Stack>
    );
  };

  return (
    <Stack spacing={2} overflow={'hidden'}>
      <Typography fontSize={{ xs: '0.75rem', sm: '1rem' }}>{`${userCanHover ? 'Hover' : 'Tap'} a project to find out more.`}</Typography>
      {screenIsTiny ? <MobileImages /> : <Carousel />}
    </Stack>
  );
};

export default Projects;
