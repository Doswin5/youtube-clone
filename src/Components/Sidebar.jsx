import { HiHome } from 'react-icons/hi'
import { MdOutlineExplore } from 'react-icons/md'
// import { HiHome } from 'react-icons/hi'
import { BsCollectionPlay } from 'react-icons/bs'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { MdQueuePlayNext } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside>
            <Link to='/' className='links'>
                <div>
                    <HiHome className='aside-icons'/>
                    <p>Home</p>
                </div>
            </Link>
            <Link to='/feed/explore' className='links'>
                <div>
                    <MdOutlineExplore className='aside-icons'/>
                    <p>Explore</p>
                </div>
            </Link>
            <Link to='/shorts' className='links'>
                <div>
                    <MdQueuePlayNext className='aside-icons'/>
                    <p>Shorts</p>
                </div>
            </Link>
            <Link to='/feed/subscriptions' className='links'>
                <div>
                    <BsCollectionPlay className='aside-icons'/>
                    <p>Subscriptions</p>
                </div>
            </Link>
            <Link to='/feed/library' className='links'>
                <div>
                    <MdOutlineVideoLibrary className='aside-icons'/>
                    <p>Library</p>
                </div>
            </Link>
        </aside>
    )
}

export default Sidebar