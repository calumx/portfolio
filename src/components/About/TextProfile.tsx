import { Fragment, useState } from 'react';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TextProfile = () => {
  const [selectedCategory, setSelectedCategory] = useState('rad');
  const theme = useTheme();

  return (
    <Stack textAlign={'left'} gap={{ xs: '1rem', sm: '1.5rem' }} overflow={'scroll'}>
      <Typography fontSize={['0.75rem', '1rem', '1.25rem', '1.5rem']}>
        {`Self-taught developer with an interest in auto-didactism, accessibility and DRY code. Musician, film buff, amateur chef and dog fan. Click below to discover my opinions.`}
      </Typography>
      <Stack direction={'row'} width={'100%'} justifyContent={'center'} gap={{ xs: '1rem', sm: '1.5rem' }}>
        {['rad', 'bad'].map((category, idx) => {
          const isActiveCategory = selectedCategory === category;
          return (
            <Fragment key={`category-${category}`}>
              <Typography
                fontSize={{ xs: '1.5rem', sm: '2.5rem', lg: '3rem' }}
                color={isActiveCategory ? (idx % 2 ? theme.palette.error.main : theme.palette.success.main) : 'grey'}
                textTransform={'uppercase'}
                sx={{ cursor: 'pointer' }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Typography>
              {category === 'rad' && <Typography fontSize={{ xs: '1.5rem', sm: '2.5rem', lg: '3rem' }}>/</Typography>}
            </Fragment>
          );
        })}
      </Stack>
      <List sx={{ listStyleType: 'disc', p: 4, border: `1px solid ${theme.palette.primary.light}` }}>
        {lists[selectedCategory].map((item) => {
          return (
            <ListItem key={item.slice(10)} disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primaryTypographyProps={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>{item}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default TextProfile;

const lists: { [key: string]: string[] } = {
  rad: [
    'Guitars, drums, synthesizers - the music of Carly Rae Jepsen, Judee Sill and Goblin',
    'Come and See (1985), The Thing (1982), Mulholland Drive (2001), Possession (1981)',
    'Valdeón, caramel digestives, dead peaty whiskies',
  ],
  bad: [
    `Taylor Swift's "London Boy" on Radio 1's Live Lounge`,
    'Marvel & DC films, Danny McBride/David Gordon Green trilogies',
    'Grzybki marynowane, brown sauce, truffle oil',
  ],
};
