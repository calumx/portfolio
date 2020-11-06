import './About.css';
import profilePic from './assets/images/profile-pic.jpeg';

const About = () => {
  return (
    <div className="about-frame-container">
      <div className="top-container">
        <div className="about-blurb">
          <p>
            Front-end developer with a focus on the React framework and a
            comfortable user experience. Auto-didacticism aficionado with a
            hunger for knowledge and a thirst for CSS animations. Currently
            working on applying the skills gleaned from years of work as a music
            therapist to the world of code (there's more crossover than you
            might expect).
          </p>
        </div>
        <div className="img-container">
          <img className="profile-img" src={profilePic} alt="profile-pic"></img>
        </div>
      </div>

      <div className="about-text">
        <div className="likes-column">
          <h2>Likes</h2>
          <p>Music, film and TV</p>
          <p>Hearts (the card game)</p>
          <p>Munros (ascending)</p>
        </div>
        <div className="dislikes-column">
          <h2>Dislikes</h2>
          <p>Pickled foods</p>
          <p>Wet socks</p>
          <p>Munros (descending)</p>
        </div>
        <div className="ambivalent">
          <h2>Ambivalent About</h2>
          <p>White wine</p>
          <p>"Funny" songs</p>
          <p>Munros (summit)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
