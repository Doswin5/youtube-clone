import video1 from '../Assets/videos/video1.mp4'

const ExplorePage = () => {
  return (
    <div className='explore-container'>
      <div className="explore-categories">
        <div className="explore-category">
          <h1>Trending</h1>
        </div>
        <div className="explore-category">
          <h1>Music</h1>
        </div>
        <div className="explore-category">
          <h1>Gaming</h1>
        </div>
        <div className="explore-category">
          <h1>News</h1>
        </div>
        <div className="explore-category">
          <h1>Sport</h1>
        </div>
      </div>
      <div className="trending-videos">
        <p><strong>Trending Videos</strong></p>
        {/* <p>Trending Videos</p> */}
        <div className="trending-video-item">
          <video src={video1} controls className="trending-video"></video>
          <div className="trending-video-details">
            <p className='bold-text'>CULTIST BATTLES FOR PRINCE - PRIESTESS MODOLA ft OGB RECENT/BRIAN JOTTER/NASBOI ( PART 1 )</p>
            <p className="grey-text">SIRBALO COMEDY &bull; 9.6K views &bull; 7 days ago</p>
            <p className="grey-text">This is a battle between THE CHIEF PRIESTESS of the community and THE PRINCE...</p>
          </div>
        </div>
        <div className="trending-video-item">
          <video src={video1} controls className="trending-video"></video>
          <div className="trending-video-details">
            <p className='bold-text'>CULTIST BATTLES FOR PRINCE - PRIESTESS MODOLA ft OGB RECENT/BRIAN JOTTER/NASBOI ( PART 1 )</p>
            <p className="grey-text">SIRBALO COMEDY &bull; 9.6K views &bull; 7 days ago</p>
            <p className="grey-text">This is a battle between THE CHIEF PRIESTESS of the community and THE PRINCE...</p>
          </div>
        </div>
        <div className="trending-video-item">
          <video src={video1} controls className="trending-video"></video>
          <div className="trending-video-details">
            <p className='bold-text'>CULTIST BATTLES FOR PRINCE - PRIESTESS MODOLA ft OGB RECENT/BRIAN JOTTER/NASBOI ( PART 1 )</p>
            <p className="grey-text">SIRBALO COMEDY &bull; 9.6K views &bull; 7 days ago</p>
            <p className="grey-text">This is a battle between THE CHIEF PRIESTESS of the community and THE PRINCE...</p>
          </div>
        </div>
        <div className="trending-video-item">
          <video src={video1} controls className="trending-video"></video>
          <div className="trending-video-details">
            <p className='bold-text'>CULTIST BATTLES FOR PRINCE - PRIESTESS MODOLA ft OGB RECENT/BRIAN JOTTER/NASBOI ( PART 1 )</p>
            <p className="grey-text">SIRBALO COMEDY &bull; 9.6K views &bull; 7 days ago</p>
            <p className="grey-text">This is a battle between THE CHIEF PRIESTESS of the community and THE PRINCE...</p>
          </div>
        </div>
        <div className="trending-video-item">
          <video src={video1} controls className="trending-video"></video>
          <div className="trending-video-details">
            <p className='bold-text'>CULTIST BATTLES FOR PRINCE - PRIESTESS MODOLA ft OGB RECENT/BRIAN JOTTER/NASBOI ( PART 1 )</p>
            <p className="grey-text">SIRBALO COMEDY &bull; 9.6K views &bull; 7 days ago</p>
            <p className="grey-text">This is a battle between THE CHIEF PRIESTESS of the community and THE PRINCE...</p>
          </div>
        </div>
        <div className="trending-video-item">
          <video src={video1} controls className="trending-video"></video>
          <div className="trending-video-details">
            <p className='bold-text'>CULTIST BATTLES FOR PRINCE - PRIESTESS MODOLA ft OGB RECENT/BRIAN JOTTER/NASBOI ( PART 1 )</p>
            <p className="grey-text">SIRBALO COMEDY &bull; 9.6K views &bull; 7 days ago</p>
            <p className="grey-text">This is a battle between THE CHIEF PRIESTESS of the community and THE PRINCE...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage