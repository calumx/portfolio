import './MyWork.css';

const MoreInfo = (props) => {
  return (
    <div className="info-text-expanded">
      {props.about === 'christmas' ? (
        <div id="christmas-info-text">
          <h2>Stack Used: React/CSS</h2>
          <p>
            An advent calendar to suggest a film (and food/drink pairings!)
            every day in December. I learned a lot about handling large
            quantities of images and how this affects the user experience, got
            more comfortable with getting/setting information using the
            browser's localStorage, and using DevTools to debug a project.
          </p>
        </div>
      ) : props.about === 'meaningful' ? (
        <div id="meaningful-info-text">
          <h2>Stack Used: HTML5/CSS3/JavaScript - all vanilla.</h2>
          <p>
            A multi-page site built for a client who had put together an outline
            using a WordPress template and wanted this to be recreated, with
            some tweaks and additions. A good exercise in working to spec and
            incorporating client feedback, as well as a bit of a CSS Grid
            bootcamp, and my first site in production. Contact form was
            originally built with a simple PHP backend but now handled by
            Netlify.
          </p>
        </div>
      ) : props.about === 'foreign' ? (
        <div id="foreign-info-text">
          <h2>Stack Used: React, CSS3 (Axios for backend)</h2>
          <p>
            A single-page app to track and report on my film-watching habits;
            specifically, to analyse my ratio of English-language films to films
            in other languages (I set myself the goal of 50:50 in 2020). The
            front-end was fairly straight-forward to put together, the real
            learning curve for me was in the deployment. Having only developed
            on my local machine at this point, I had to learn about using
            environment variables to protect my API key and port my backend API
            calls over to a serverless function on my chosen host.
          </p>
        </div>
      ) : props.about === 'chores' ? (
        <div id="chores-info-text">
          <h2>Stack Used: React Native, React Navigation</h2>
          <p>
            A mobile app to gamify housework, to appeal to my partner and I's
            competitive sensibilities. Users log their household chores and are
            awarded points accordingly, and the person with the most points at
            the end of the week can choose from a list of rewards. I built this
            partly for its real-world benefits but also to explore React Native
            and its relationship to React proper. This turned out to be a bit
            trickier than I had anticipated!
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default MoreInfo;
