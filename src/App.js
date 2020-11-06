import './App.css';
import { useState } from 'react';
import htmlLogo from './assets/images/HTML5.svg';
import cssLogo from './assets/images/CSS3.svg';
import jsLogo from './assets/images/JS.svg';
import reactLogo from './assets/images/logo.svg';
import nodeLogo from './assets/images/NODE.svg';
import RenderContent from './RenderContent';

function App() {
  const [contentShowing, setContentShowing] = useState(false);
  const [page, setPage] = useState('');

  const clickHandler = (pageName) => {
    contentShowing
      ? setPage(pageName)
      : document.getElementById('main-content').classList.add('main-content');
    setPage(pageName);
  };

  return (
    <div className="App">
      <div className="text-container">
        <p className="mainText">Calum Muir</p>
        <p className="secondText lg">Coder // Creator</p>
        <p className="secondText sm">Code</p>
      </div>

      <div className="logo-container">
        <ul className="logo-list">
          <li>
            <img src={htmlLogo} className="app-logos" alt="html-logo" />
          </li>

          <li>
            <img src={cssLogo} className="app-logos" alt="css-logo" />
          </li>

          <li>
            <img src={jsLogo} className="app-logos" alt="js-logo" />
          </li>
          <li>
            <img src={reactLogo} className="app-logos" alt="react-logo" />
          </li>
          <li>
            <img src={nodeLogo} className="app-logos" alt="react-logo" />
          </li>
        </ul>
      </div>

      <div id="main-content" onAnimationEnd={() => setContentShowing(true)}>
        {contentShowing ? <RenderContent page={page} /> : ''}
      </div>

      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <p onClick={() => clickHandler('work')} className="lg">
              My Work
            </p>
            <p onClick={() => clickHandler('work')} className="sm">
              Work
            </p>
          </li>
          <li>
            <p onClick={() => clickHandler('about')}>About</p>
          </li>
          <li>
            <p onClick={() => clickHandler('contact')}>Contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
