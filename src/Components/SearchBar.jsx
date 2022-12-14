import { GrSearch } from 'react-icons/gr'
import { AiTwotoneAudio } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="searchBar">
        <input type="search" placeholder='Search' />
        <GrSearch className='search-icon' title='Search' />
      </div>
      <div className="audio">
        <a title='Search with your voice'><AiTwotoneAudio className='audio-icon' /></a>
      </div>
    </div>
  )
}

export default SearchBar