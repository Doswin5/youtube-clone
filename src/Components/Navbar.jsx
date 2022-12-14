import { GrMenu } from 'react-icons/gr'
import youtubeLogo from '../Assets/logos/youtubeLogo.png'
import SearchBar from './SearchBar'
import Profile from './Profile'

const Navbar = () => {
  return (
    <nav>
      <div>
        <GrMenu className='menu' />
        <a href="#"><img src={youtubeLogo} alt="youtubeLogo" title='YouTube Home' /></a>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Profile />
      </div>
    </nav>
  )
}

export default Navbar