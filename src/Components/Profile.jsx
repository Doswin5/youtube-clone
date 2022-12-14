import { RiVideoAddLine } from 'react-icons/ri'
import { GrApps } from 'react-icons/gr'
import { IoIosNotificationsOutline } from 'react-icons/io'
import dp from '../Assets/images/ayo.jpeg'

const Profile = () => {
  return (
    <div className="profile">
        <RiVideoAddLine className='profile-icon' title='Create' />
        <GrApps className='profile-icon' title='YouTube apps' />
        <IoIosNotificationsOutline className='profile-icon' title='Notifications' />
        <img src={dp} />
    </div>
  )
}

export default Profile