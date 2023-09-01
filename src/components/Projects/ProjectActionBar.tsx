import { IconButton, Link, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Info, OpenInNew } from '@mui/icons-material';
import { Project } from '../../helpers/projects';
import ProjectDialog from './ProjectDialog';
import { Dispatch, SetStateAction } from 'react';
import GitHubButton from './GitHubButton';

type Props = {
  projectDetails: Project;
  barExpanded: boolean;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  setShowPortfolioError: Dispatch<SetStateAction<boolean>>;
};

const ProjectActionBar = ({ projectDetails, barExpanded, showDialog, setShowDialog, setShowPortfolioError }: Props) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const iconSize = smallScreen ? 'small' : 'large';
  const darkMode = theme.palette.mode === 'dark';

  const LinkButton = ({ onClick }: { onClick?: () => void }) => {
    return (
      <IconButton size={iconSize} sx={{ bgcolor: darkMode ? 'primary.dark' : 'secondary.light' }} onClick={onClick}>
        <OpenInNew fontSize={iconSize} sx={{ color: '#fff' }} />
      </IconButton>
    );
  };

  return (
    <Stack
      position='absolute'
      bottom={0}
      bgcolor={darkMode ? 'secondary.dark' : 'primary.light'}
      color='#fff'
      p={2}
      width='100%'
      overflow={'hidden'}
      height={barExpanded ? '65%' : '15%'}
      sx={{ transition: 'height 200ms ease-out', alignItems: 'center', justifyContent: barExpanded ? 'start' : 'center' }}
    >
      <Stack>
        <Typography fontWeight={'bold'} fontSize={{ xs: '0.825rem', sm: '1rem' }}>
          {projectDetails.title}
        </Typography>
        {barExpanded && (
          <Stack direction={'row'} mt='1rem'>
            <Stack direction='row' gap={{ xs: '1rem', lg: '2rem' }}>
              <IconButton size={iconSize} onClick={() => setShowDialog(true)} sx={{ bgcolor: darkMode ? 'primary.dark' : 'secondary.light' }}>
                <Info fontSize={iconSize} sx={{ color: '#fff' }} />
              </IconButton>
              <GitHubButton repos={projectDetails.repos} iconSize={iconSize} bgColor={darkMode ? 'primary.dark' : 'secondary.light'} />

              {projectDetails.key === 'portfolio' ? (
                <LinkButton onClick={() => setShowPortfolioError(true)} />
              ) : (
                <Link href={projectDetails.link} target='_blank' rel='noreferrer'>
                  <LinkButton />
                </Link>
              )}
            </Stack>
          </Stack>
        )}
      </Stack>
      <ProjectDialog dialogOpen={showDialog} selectedProject={projectDetails} setDialogOpen={setShowDialog} />
    </Stack>
  );
};

export default ProjectActionBar;
