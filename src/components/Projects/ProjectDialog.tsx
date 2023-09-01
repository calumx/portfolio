import { Box, Button, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { Project } from '../../helpers/projects';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

interface ProjectInfoProps {
  dialogOpen: boolean;
  selectedProject: Project | undefined;
  setDialogOpen: (open: boolean) => void;
}

const ProjectDialog = ({ dialogOpen, selectedProject, setDialogOpen }: ProjectInfoProps) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  return (
    <Dialog open={dialogOpen} fullWidth>
      <DialogTitle sx={{ textTransform: 'capitalize' }}>
        <Stack>
          {selectedProject?.title}
          <Stack direction='row' gap='1rem' width={'100%'} justifyContent={'center'} mt='1rem' display={{ xs: 'flex', sm: 'none' }}>
            <Link href={selectedProject?.repos?.[0]?.link} target='_blank' rel='noreferrer'>
              <IconButton size={'small'} sx={{ bgcolor: darkMode ? 'secondary.dark' : 'primary.dark' }}>
                <GitHub fontSize={'small'} sx={{ color: '#fff' }} />
              </IconButton>
            </Link>
            {selectedProject?.key !== 'portfolio' && (
              <Link href={selectedProject?.link} target='_blank' rel='noreferrer'>
                <IconButton size={'small'} sx={{ bgcolor: darkMode ? 'secondary.dark' : 'primary.dark' }}>
                  <OpenInNew fontSize={'small'} sx={{ color: '#fff' }} />
                </IconButton>
              </Link>
            )}
          </Stack>
        </Stack>
        <IconButton
          aria-label='close'
          onClick={() => setDialogOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', whiteSpace: 'pre-wrap' }}>
        <Stack
          margin='0 auto'
          border={`1px solid ${theme.palette[darkMode ? 'secondary' : 'primary'].main}`}
          p={1}
          width={{ xs: '100%', sm: '75%' }}
          mb={1}
        >
          <Typography margin='0 auto' fontSize={{ xs: '1rem', sm: '1.5rem' }} color={darkMode ? 'secondary.main' : 'primary.main'}>
            STACK
          </Typography>
          <Divider sx={{ mb: '0.5rem' }} />
          <Typography fontSize={{ xs: '0.75rem', sm: '1rem' }}>{selectedProject?.stack}</Typography>
        </Stack>
        <MarkdownTypography text={selectedProject?.desc} />
        <Button
          variant='contained'
          size='large'
          color={darkMode ? 'secondary' : 'primary'}
          sx={{ width: '100%' }}
          onClick={() => setDialogOpen(false)}
        >
          CLOSE
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;

const MarkdownTypography = ({ text }: { text: string | undefined }) => {
  const regexForLinks = /(\[[^\]]+\]\([^)]+\))/g;
  const linksPulledOut = text?.split(regexForLinks);

  return (
    <Box sx={{ mb: 5, display: 'inline', fontSize: { xs: '0.75rem', sm: '1rem' } }}>
      {linksPulledOut?.map((str, idx) => {
        if (idx % 2 !== 0) {
          const regexToSplitMarkdown = /\[([^\]]+)\]\(([^)]+)\)/;
          const [, linkText, linkHref] = str.match(regexToSplitMarkdown) || [];
          return (
            <Link key={`project-desc-link-${idx}`} href={linkHref} display='inline' sx={{ cursor: 'pointer' }} target='_blank' rel='noreferrer'>
              {linkText}
            </Link>
          );
        } else
          return (
            <Typography key={`project-desc-${idx}`} display={'inline'}>
              {str.replaceAll('*', '')}
            </Typography>
          );
      })}
    </Box>
  );
};
