import { useEffect, useState } from 'react';
import { IconButton, Stack, useTheme } from '@mui/material';
import { Project, allProjects } from '../../helpers/projects';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ProjectImg from '../Projects/ProjectImg';

const Carousel = () => {
  const [projectDetails, setProjectDetails] = useState({} as Project);
  const [activeProject, setActiveProject] = useState(0);
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const goToNextProject = () => {
    if (activeProject === allProjects.length - 1) return setActiveProject(0);
    return setActiveProject((prev) => prev + 1);
  };

  const goToPrevProject = () => {
    if (activeProject === 0) return setActiveProject(allProjects.length - 1);
    return setActiveProject((prev) => prev - 1);
  };

  useEffect(() => {
    setProjectDetails(allProjects[activeProject]);
  }, [activeProject]);

  return (
    <Stack direction={'row'} alignItems={'center'}>
      <IconButton onClick={goToPrevProject} size='large'>
        <KeyboardArrowLeft fontSize='large' color={darkMode ? 'secondary' : 'primary'} />
      </IconButton>
      <ProjectImg projectDetails={projectDetails} />
      <IconButton onClick={goToNextProject} size='large'>
        <KeyboardArrowRight fontSize='large' color={darkMode ? 'secondary' : 'primary'} />
      </IconButton>
    </Stack>
  );
};

export default Carousel;
