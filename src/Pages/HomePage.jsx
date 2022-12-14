import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Content from '../Components/Content'

const HomePage = ({contents}) => {
  return (
    <>
        <Navbar2 />
        <Content contents={contents} />
    </>
  )
}

export default HomePage