import simpsonsle from '../img/simpsonsle-lg.webp';
import rudi_dark from '../img/rudi-dark.webp';
import rudi_lite from '../img/rudi-lite.webp';
import grid_dark from '../img/grid-dark.webp';
import grid_lite from '../img/grid-lite.webp';
import portfolio_dark from '../img/portfolio-dark.webp';
import portfolio_lite from '../img/portfolio-lite.webp';

type RepoLink = {
  label: string;
  link: string;
};

export type Project = {
  imgs: { lite: string; dark: string };
  title: string;
  key: string;
  stack: string;
  desc: string;
  link: string;
  repos: RepoLink[];
};

export const allProjects: Project[] = [
  {
    imgs: { lite: simpsonsle, dark: simpsonsle },
    title: 'Simpsonsle',
    key: 'simpsonsle',
    stack: `MongoDB, Express, Node, React (MERN)\nMUI`,
    desc: `This is a Wordle clone based around guessing the title of an episode of classic-era Simpsons (Seasons 3 - 9) based on a screenshot from the episode. This was my first full-stack project, and the MongoDB side of things took a lot of learning in particular.\n\nUpon deployment, I learned that my chosen host (Render) spun the server down after 15 minutes without a request, resulting in extremely slow load times. My solution was to create a cron job using cron-job.org, in addition to the one that cycles episodes at midnight, to hit the server every 15 minutes during my chosen "uptime" hours.`,
    link: 'https://simpsonsle.com',
    repos: [
      { label: 'frontend', link: 'https://github.com/calumx/simpsonsle-frontend' },
      { label: 'backend', link: 'https://github.com/calumx/simpsonsle-backend' },
    ],
  },
  {
    imgs: {
      lite: grid_lite,
      dark: grid_dark,
    },
    title: 'Grid Matrix',
    key: 'grid-matrix',
    stack: 'Preact & TypeScript, bootstrapped with Vite\nChakra UI',
    desc: `After developing some remote Visual Field tests at my work, I was quite pleased with my solution to allow opticians to implement their own grid sytems based on custom co-ordinates. I decided to adapt this into a whac-a-mole type of game.\n\nIt also seemed like a simple enough project to try out Preact. The small bundle size was great, but in retrospect I didn't really utilise to its full potential (Signals), and spent a lot of time faffing in my editor to activate some linting features I liked from React (the exhaustive-deps rule for useEffects, for example).\n\nI had heard good things about Chakra UI too, so I used it here instead of MUI. I found it pretty intuitive and enjoyed the smaller bundle size & reduced dev complexity.`,
    link: 'https://grid-matrix.netlify.app',
    repos: [{ label: 'frontend', link: 'https://github.com/calumx/grid-matrix' }],
  },
  {
    imgs: { lite: rudi_lite, dark: rudi_dark },
    title: 'Rudi',
    key: 'rudi',
    stack: 'React & TypeScript, bootstrapped with Vite\nTailwindCSS',
    desc: `This is designed to help me organise & motivate my drum practice, specificially the [40 rudiments](https://www.youtube.com/watch?v=WSC7iujjg_o). It groups the rudiments into the highest recorded tempo for the user, then randomises them while preserving the gist of the weakest => strongest order. This way, each time the user loads the app, they should be presented with a rudiment that needs some work.\n\nIt's a very simple app using localStorage and some logic from [Zyklus](https://github.com/felixroos/zyklus) to handle the metronome. I had initially planned to code that myself, but learned a lot about the unreliability of JavaScript's setInterval after some frustration! I added some TypeScript support to this library. The project as a whole began life as a larger beast with a Supabase backend and auth for each user, but I parked that functionality for a later date after realising the project had mostly become a tool to distract myself EVEN MORE from actually practicing.`,
    link: 'https://calum-rudi.netlify.app',
    repos: [{ label: 'frontend', link: 'https://github.com/calumx/rudi' }],
  },
  {
    imgs: {
      lite: portfolio_lite,
      dark: portfolio_dark,
    },
    title: 'This Portfolio',
    key: 'portfolio',
    stack: 'React & Typescript, bootstrapped with Vite\nMUI',
    desc: `My old portfolio was in need of an update, so here we are. I generally hate writing about myself so tried to have a laugh with the spinning wheels and code blocks in the "About" section (on larger screens).\n\nI also found this was a great way to waste loads of time under the guise of learning, e.g. Photoshopping images for an "infinite recursion" effect on this entry, hand-coding the Carousel instead of using a library, and writing a bunch of regex to [parse links in Markdown format](https://github.com/calumx/portfolio/blob/main/src/components/Projects/ProjectDialog.tsx#L84) - or should I say, *[parse links in Markdown format]*(bonus regex ignore edition)*?\n\nMost of these projects are in varying WIP stages, but I'm happy enough with the ideas and they were all really just excuses to play around with some tech I wanted to learn.\n\nCOMING ATTRACTIONS: a Reddit bot with a Flask backend, a Redux incremental game, and a separation anxiety training tool for my dog using Twilio and Supabase.`,
    link: '', //user is already on this page.
    repos: [{ label: 'frontend', link: 'https://github.com/calumx/portfolio' }],
  },
];
