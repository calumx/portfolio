import { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Project } from '../../helpers/projects';
import ProjectActionBar from './ProjectActionBar';
import PortfolioErrorOverlay from '../PortfolioErrorEffect/ErrorOverlay';

const ProjectImg = ({ projectDetails }: { projectDetails: Project }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [actionsBarExpanded, setActionsBarExpanded] = useState(false);
  const [showPortfolioError, setShowPortfolioError] = useState(false);
  const theme = useTheme();
  const userCanHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const screenIsTiny = useMediaQuery(theme.breakpoints.down('sm'));
  const darkMode = theme.palette.mode === 'dark';

  const handleClick = () => {
    if (userCanHover) return null;
    if (screenIsTiny) return setShowDialog(!showDialog);
    return setActionsBarExpanded(!actionsBarExpanded);
  };

  return (
    <Box
      onMouseEnter={() => (userCanHover ? setActionsBarExpanded(true) : null)}
      onMouseLeave={() => (userCanHover ? setActionsBarExpanded(false) : null)}
      onClick={handleClick}
      sx={{ position: 'relative', cursor: 'pointer', aspectRatio: 1.76, width: ['200px', '375px', '550px', '600px'] }}
    >
      {projectDetails.key === 'portfolio' && <PortfolioErrorOverlay show={showPortfolioError} setShow={setShowPortfolioError} />}
      <Box
        component={'img'}
        src={projectDetails.imgs?.[darkMode ? 'dark' : 'lite']}
        alt={projectDetails.title}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <ProjectActionBar
        projectDetails={projectDetails}
        barExpanded={actionsBarExpanded}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        setShowPortfolioError={setShowPortfolioError}
      />
    </Box>
  );
};

export default ProjectImg;
