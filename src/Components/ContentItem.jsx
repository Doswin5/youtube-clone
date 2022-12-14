import video1 from '../Assets/videos/video1.mp4'
import dp from '../Assets/images/ayo.jpeg'

const ContentItem = ({ content }) => {
  return (
    <div className='content-item'>
      <video src={video1} controls className='content-video'></video>
      <div className="content-div">
        <img src={dp} alt="profile picture" />
        <div className="contents">
          <p className='bold-text'><strong>Why I Hire Only Genius People - Elon Musk</strong></p>
          <p className="grey-text">{content.title1}</p>
          <p className="grey-text">9.6K views &bull; 7 days ago</p>
        </div>
      </div>
    </div>
  )
}

export default ContentItem