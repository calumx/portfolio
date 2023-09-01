import { useState } from 'react';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
import { GitHub } from '@mui/icons-material';

type Props = {
  repos: { label: string; link: string }[];
  iconSize: 'small' | 'medium' | 'large';
  bgColor: string;
};

const GitHubButton = ({ repos, iconSize, bgColor }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return repos.length > 1 ? (
    <>
      <IconButton
        size={iconSize}
        sx={{ bgcolor: bgColor }}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <GitHub fontSize={iconSize} sx={{ color: '#fff' }} />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href={repos[0].link} target='_blank' rel='noreferrer' underline='none' color='inherit'>
          <MenuItem onClick={handleClose}>Frontend</MenuItem>
        </Link>
        <Link href={repos[1].link} target='_blank' rel='noreferrer' underline='none' color='inherit'>
          <MenuItem onClick={handleClose}>Backend</MenuItem>
        </Link>
      </Menu>
    </>
  ) : (
    <Link href={repos[0].link} target='_blank' rel='noreferrer'>
      <IconButton size={iconSize} sx={{ bgcolor: bgColor }}>
        <GitHub fontSize={iconSize} sx={{ color: '#fff' }} />
      </IconButton>
    </Link>
  );
};

export default GitHubButton;
