import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyWork.css';
import {
  faChevronCircleRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { useState, useRef, useEffect } from 'react';
import MoreInfo from './MoreInfo';
import { Popover, Slide } from '@material-ui/core';
import { Popover as ReactPopover } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import meaningfulThumb from './assets/images/meaningful-map-thumbnail.png';
import foreignThumb from './assets/images/foreign-thumbnail.png';
import choreThumb from './assets/images/choremaster-thumbnail.png';
import christmasThumb from './assets/images/christmas-thumbnail.png';
import meaningfulVid from './assets/videos/meaningful-vid.webm';
import foreignVid from './assets/videos/foreign-vid.webm';
import choresVid from './assets/videos/chores-vid.webm';
import christmasVid from './assets/videos/christmas-vid.webm';

const MyWork = () => {
  const [infoOpened, setInfoOpened] = useState('');
  const [siteClickedStyle, setSiteClickedStyle] = useState(null);
  const [shouldShrink, toggleShouldShrink] = useState(false);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');
  const [anchorEl, setAnchorEl] = useState(null);
  const [vidOpened, setVidOpened] = useState('');
  const [showPop, setShowPop] = useState(false);
  const [imgLinksContainer, setImgLinksContainer] = useState(null);
  const [carousel, setCarousel] = useState('right');

  const [verticalView, setVerticalView] = useState(
    window.matchMedia('(max-width: 890px)').matches ? true : false
  );

  //infoClickHandler MEGA LOGIC begins here <-------------------------------------------------------

  const infoClickHandler = (name) => {
    //RESPONSIVE, VERTICAL VIEW MODAL LOGIC

    if (verticalView) {
      setInfoOpened(name);
      setShowPop(true);

      document.getElementById('img-links').classList.add('dim'); //ADD NEW DIM CLASS);
      document.getElementsByClassName(name)[0].classList.add('bright'); //ADD NEW BRIGHT CLASS
      return;

      //FULL-SCREEN HORIZONTAL LOGIC
    } else if (name === 'christmas') {
      setSiteClickedStyle({
        transformOrigin: 'left top',
        overflow: 'scroll',
      });
    } else if (name === 'meaningful') {
      setSiteClickedStyle({
        transformOrigin: carousel === 'left' ? 'left top' : 'center top',
        overflow: 'scroll',
      });
    } else if (name === 'foreign') {
      setSiteClickedStyle({
        transformOrigin: carousel === 'left' ? 'center top' : 'right top',
        overflow: 'scroll',
      });
    } else {
      setSiteClickedStyle({
        transformOrigin: 'right top',
        overflow: 'scroll',
      });
    }

    //FIRST CLICK
    if (!infoOpened) {
      toggleShouldShrink(false);
      setInfoOpened(name);
      document.getElementById(name + '-arrow').classList.add('spin-class');
      document.getElementsByClassName(name)[0].classList.add('bright');
      document.getElementById('img-links').classList.add('dim');

      //IF USER IS TRYING TO CLOSE CURRENTLY OPENED THING
    } else if (infoOpened === name) {
      toggleShouldShrink(!shouldShrink);
      document.getElementById(name + '-arrow').classList.toggle('spin-class');
      document.getElementById('img-links').classList.toggle('dim');
      document.getElementsByClassName(name)[0].classList.toggle('bright');

      //IF SOMETHING ELSE IS ALREADY OPENED
    } else if (infoOpened !== name && shouldShrink === false) {
      document
        .getElementsByClassName('spin-class')[0]
        .classList.remove('spin-class'); //UNSPIN OLD CHEVRON
      document.getElementById(name + '-arrow').classList.toggle('spin-class'); //SPIN NEW CHEVRON
      document.getElementsByClassName('bright')[0].classList.remove('bright'); //REMOVE OLD BRIGHT CLASS
      document.getElementsByClassName(name)[0].classList.add('bright'); //ADD NEW BRIGHT CLASS

      //SLIDE LOGIC
      setSlideDirection('right');
      setSlideIn(false);

      setTimeout(() => {
        setInfoOpened(name);
        setSlideDirection('left');
        setSlideIn(true);
      }, 225);
      //END SLIDE LOGIC

      //IF NOTHING ELSE IS ALREADY OPENED
    } else {
      toggleShouldShrink(false); //ENSURE NOTHING SET TO SHRINK YET
      setInfoOpened(name);
      document.getElementById(name + '-arrow').classList.add('spin-class'); //SPIN NEW CHEVRON
      document.getElementById('img-links').classList.add('dim'); //ADD NEW DIM CLASS
      document.getElementsByClassName(name)[0].classList.add('bright'); //ADD NEW BRIGHT CLASS
    }
  };

  //infoClickHandler MEGA LOGIC ends here <-------------------------------------------------------

  const imgClickHandler = (e, site) => {
    if (shouldShrink || !infoOpened) {
      setAnchorEl(e.currentTarget);
      setVidOpened(site);
      document.getElementsByClassName('App')[0].classList.add('dim'); //ADD NEW DIM CLASS
      document.getElementsByClassName(site)[0].classList.add('bright'); //ADD NEW BRIGHT CLASS
    } else {
      infoClickHandler(site);
    }
  };

  const popoverClose = () => {
    setShowPop(false);
    setAnchorEl(null);
    setVidOpened('');
    document.getElementsByClassName('dim')[0].classList.remove('dim'); //REMOVE OLD DIM CLASS
    if (document.getElementsByClassName('bright')[0]) {
      document.getElementsByClassName('bright')[0].classList.remove('bright');
    } //REMOVE OLD BRIGHT CLASS
  };

  window.matchMedia('(max-width: 890px)').onchange = (width) => {
    if (width.matches) {
      setVerticalView(true);
    } else setVerticalView(false);
  };

  if (!shouldShrink && infoOpened) {
    document.body.onmouseup = (e) => {
      if (
        e.target.className === 'more-info' ||
        e.target.closest('.more-info') ||
        e.target.hasAttribute('alt')
      ) {
        document.body.onmouseup = null;
      } else if (!e.target.closest('.info-text-container')) {
        infoClickHandler(infoOpened);
      }
    };
  }

  if (shouldShrink) {
    document.body.onmouseup = null;
  }

  const target = useRef(null);

  useEffect(() => {
    setImgLinksContainer(document.getElementById('img-links'));
  }, []);

  const scrollImgs = (direction) => {
    if (direction === 'right') {
      imgLinksContainer.scrollLeft = imgLinksContainer.scrollWidth;
      setCarousel('left');
    } else {
      imgLinksContainer.scrollLeft = 0;
      setCarousel('right');
    }
  };

  return (
    <div className="frame-content-container">
      <p className="frame-text">
        Click each picture to see a demo video, or click the links underneath
        for more information.
      </p>

      <FontAwesomeIcon
        icon={faChevronLeft}
        size="lg"
        style={{
          paddingLeft: '0.5%',
          position: 'absolute',
          top: '25%',
          borderTopLeftRadius: '0',
          transform: 'translateY(150%)',
          zIndex: '1',
          cursor: 'pointer',
          opacity: carousel === 'left' ? 1 : 0,
          visibility: verticalView ? 'hidden' : 'visible',
          transition: 'opacity 500ms ease-in-out',
        }}
        onClick={() => scrollImgs('left')}
      />

      <div
        className="img-links"
        id="img-links"
        style={{
          maskImage:
            carousel === 'right'
              ? 'linear-gradient(to right, black 85%, transparent 100%)'
              : 'linear-gradient(to left, black 85%, transparent 100%)',
          WebkitMaskImage:
            carousel === 'right'
              ? 'linear-gradient(to right, black 85%, transparent 100%)'
              : 'linear-gradient(to left, black 85%, transparent 100%)',
        }}
      >
        <div className="christmas">
          <img
            id="christmas-thumb"
            alt="christmas-films-thumbnail"
            src={christmasThumb}
            onClick={(e) => imgClickHandler(e, 'christmas')}
          ></img>

          <Popover
            open={vidOpened === 'christmas'}
            anchorEl={anchorEl}
            onClose={popoverClose}
            transitionDuration={{ enter: 700, exit: 400 }}
            anchorOrigin={
              verticalView
                ? {
                    vertical: 'bottom',
                    horizontal: 'center',
                  }
                : {
                    vertical: 'bottom',
                    horizontal: 'right',
                  }
            }
            transformOrigin={
              verticalView
                ? {
                    vertical: 'top',
                    horizontal: 'center',
                  }
                : {
                    vertical: 'center',
                    horizontal: 'left',
                  }
            }
          >
            <video
              src={christmasVid}
              height={verticalView ? '200px' : '350px'}
              width="auto"
              controls
              autoPlay
            />
          </Popover>

          <h1>Christmas Films Advent Calendar</h1>
          <a
            href="https://github.com/calumx/christmas-films"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <p
            onClick={() => infoClickHandler('christmas')}
            className="more-info"
            ref={target}
            id="christmas"
          >
            <FontAwesomeIcon
              id="christmas-arrow"
              icon={faChevronCircleRight}
              color="lightblue"
              style={{ marginRight: '2%', transition: 'all 0.2s ease' }}
              size="xs"
            />
            More Info
          </p>
        </div>

        <div className="meaningful">
          <img
            id="meaningful-thumb"
            alt="meaningful-map-thumbnail"
            src={meaningfulThumb}
            onClick={(e) => imgClickHandler(e, 'meaningful')}
          ></img>

          <Popover
            open={vidOpened === 'meaningful'}
            anchorEl={anchorEl}
            onClose={popoverClose}
            transitionDuration={{ enter: 700, exit: 400 }}
            anchorOrigin={
              verticalView
                ? {
                    vertical: 'bottom',
                    horizontal: 'center',
                  }
                : carousel === 'left'
                ? {
                    vertical: 'bottom',
                    horizontal: 'right',
                  }
                : {
                    vertical: 'bottom',
                    horizontal: 'center',
                  }
            }
            transformOrigin={
              verticalView
                ? {
                    vertical: 'top',
                    horizontal: 'center',
                  }
                : carousel === 'left'
                ? {
                    vertical: 'center',
                    horizontal: 'left',
                  }
                : {
                    vertical: 'top',
                    horizontal: 'center',
                  }
            }
          >
            <video
              src={meaningfulVid}
              height={verticalView ? '200px' : '350px'}
              width="auto"
              controls
              autoPlay
            />
          </Popover>

          <h1>Meaningful Map</h1>
          <a
            href="https://github.com/calumx/meaningful-map"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <p
            onClick={() => infoClickHandler('meaningful')}
            className="more-info"
            ref={target}
            id="meaningful"
          >
            <FontAwesomeIcon
              id="meaningful-arrow"
              icon={faChevronCircleRight}
              color="lightblue"
              style={{ marginRight: '2%', transition: 'all 0.2s ease' }}
              size="xs"
            />
            More Info
          </p>
        </div>

        <div className="foreign">
          <img
            id="foreign-thumb"
            alt="foreign-films-thumbnail"
            src={foreignThumb}
            onClick={(e) => imgClickHandler(e, 'foreign')}
          ></img>

          <Popover
            open={vidOpened === 'foreign'}
            anchorEl={anchorEl}
            onClose={popoverClose}
            anchorOrigin={
              verticalView
                ? {
                    vertical: 'top',
                    horizontal: 'left',
                  }
                : carousel === 'left'
                ? {
                    vertical: 'bottom',
                    horizontal: 'center',
                  }
                : {
                    vertical: 'bottom',
                    horizontal: 'left',
                  }
            }
            transformOrigin={
              verticalView
                ? {
                    vertical: 'bottom',
                    horizontal: 'center',
                  }
                : carousel === 'left'
                ? {
                    vertical: 'top',
                    horizontal: 'center',
                  }
                : {
                    vertical: 'center',
                    horizontal: 'right',
                  }
            }
          >
            <video
              src={foreignVid}
              height={verticalView ? '200px' : '350px'}
              width="auto"
              controls
              autoPlay
            />
          </Popover>

          <h1>Foreign Language Films</h1>
          <a
            href="https://github.com/calumx/foreign-language-films"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>

          <p
            onClick={() => infoClickHandler('foreign')}
            className="more-info"
            ref={target}
            id="foreign"
          >
            <FontAwesomeIcon
              id="foreign-arrow"
              icon={faChevronCircleRight}
              color="lightblue"
              style={{ marginRight: '2%', transition: 'all 0.2s ease' }}
              size="xs"
            />
            More Info
          </p>
        </div>

        <div className="chores">
          <img
            id="chores-thumb"
            alt="choremaster-thumbnail"
            src={choreThumb}
            onClick={(e) => imgClickHandler(e, 'chores')}
          ></img>

          <Popover
            open={vidOpened === 'chores'}
            anchorEl={anchorEl}
            onClose={popoverClose}
            anchorOrigin={
              verticalView
                ? {
                    vertical: 'top',
                    horizontal: 'left',
                  }
                : {
                    vertical: 'center',
                    horizontal: 'left',
                  }
            }
            transformOrigin={
              verticalView
                ? {
                    vertical: 'bottom',
                    horizontal: 'right',
                  }
                : {
                    vertical: 'bottom',
                    horizontal: 'right',
                  }
            }
          >
            <video
              src={choresVid}
              width={verticalView ? '250px' : '300px'}
              controls
              autoPlay
            />
          </Popover>

          <h1>ChoreMaster</h1>
          <a
            href="https://github.com/calumx/choremaster"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <p
            onClick={() => infoClickHandler('chores')}
            className="more-info"
            ref={target}
            id="chores"
          >
            <FontAwesomeIcon
              id="chores-arrow"
              icon={faChevronCircleRight}
              color="lightblue"
              style={{ marginRight: '2%', transition: 'all 0.2s ease' }}
              size="xs"
            />
            More Info
          </p>
        </div>
      </div>

      <Overlay
        target={document.getElementById(infoOpened)}
        show={showPop}
        rootClose={true}
        onHide={popoverClose}
        placement="top"
        transition={false}
      >
        {(props) => (
          <ReactPopover id="info-pop" {...props}>
            <MoreInfo about={infoOpened} />
          </ReactPopover>
        )}
      </Overlay>

      {infoOpened && !verticalView ? (
        <div
          className={shouldShrink ? 'info-text-shrink' : 'info-text-container'}
          style={siteClickedStyle}
        >
          <Slide
            in={slideIn}
            direction={slideDirection}
            timeout={{ enter: 250, exit: 200 }}
          >
            <div>
              <MoreInfo about={infoOpened} />
            </div>
          </Slide>
        </div>
      ) : null}

      <FontAwesomeIcon
        icon={faChevronRight}
        size="lg"
        style={{
          paddingRight: '0.5%',
          position: 'absolute',
          top: '25%',
          right: '0',
          transform: 'translateY(150%)',
          cursor: 'pointer',
          opacity: carousel === 'right' ? 1 : 0,
          visibility: verticalView ? 'hidden' : 'visible',
          transition: 'opacity 500ms ease-in-out',
        }}
        onClick={() => scrollImgs('right')}
      />
    </div>
  );
};

export default MyWork;
