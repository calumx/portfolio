import { useLayoutEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Prism from 'prismjs';
import '../../prism.css';

const CodeProfile = () => {
  const theme = useTheme();
  const shouldWrapCode = useMediaQuery(theme.breakpoints.down('lg'));

  useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className='language-js' style={{ ...(shouldWrapCode && { whiteSpace: 'pre-wrap', wordWrap: 'break-word' }) }}>
        {profileCode}
      </code>
    </pre>
  );
};

export default CodeProfile;

const profileCode = `import { useEffect, useState } from 'react';

export const DinnerParty = ({ menu, playlist, conversationTopics }) => {
  const [messageToHost, setMessageToHost] = useState('Hello.');

  useEffect(() => {
    const goodMusic = ['Bon Iver', 'Judee Sill', 'Carly Rae Jepsen'];
    const goodPatter = ['Dogs', 'Munros', 'Work of David Lynch'];

    const goodAmbience = playlist.some(({ artist }) => goodMusic.includes(artist));
    const menuQuality = menu.includes('Pickled Things') || menu.includes('Truffle Oil') ? 'poor' : 'good';
    const numberOfInterestingGuests = conversationTopics.filter(({ subject }) => goodPatter.includes(subject)).length;

    if (goodAmbience && menuQuality === 'good' && numberOfInterestingGuests > 0) {
      return setMessageToHost('Great to be here!');
    } else return leaveInHuffImmediately();
  }, [playlist, menu, conversationTopics]);

  const leaveInHuffImmediately = () => {
    setMessageToHost('Sorry, I have to be going.');
  };
  return <p>{messageToHost}</p>;
};
`;
