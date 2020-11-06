import About from './About';
import Contact from './Contact';
import MyWork from './MyWork';

const RenderContent = (props) => {
  if (props.page === 'work') {
    return <MyWork />;
  } else if (props.page === 'about') {
    return <About />;
  } else if (props.page === 'contact') {
    return <Contact />;
  }
};

export default RenderContent;
