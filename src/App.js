import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react"
import video1 from './Assets/videos/video1.mp4'
import dp from './Assets/images/ayo.jpeg'
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import ShortsPage from "./Pages/ShortsPage";
import SubscriptionsPage from "./Pages/SubscriptionsPage";
import LibraryPage from "./Pages/LibraryPage";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 2,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 3,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 4,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 5,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 6,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 7,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 8,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 9,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 10,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 11,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
    {
      id: 12,
      video: {video1},
      displayPic: {dp},
      title1: 'The Commander'
    },
  ])


  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Sidebar />
          <section>
            <Routes>
              <Route path='/' element={<HomePage contents = {contents} />} />
              <Route path='/feed/explore' element={<ExplorePage />} />
              <Route path='/feed/subscriptions' element={<SubscriptionsPage />} />
              <Route path='/feed/library' element={<LibraryPage />} />
              <Route path='/shorts' element={<ShortsPage />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
