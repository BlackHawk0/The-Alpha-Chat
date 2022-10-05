import React from 'react';
import Chats from '../components/Chats';
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <SideBar />
            <Chats />

        </div>

    </div>
  )
}

export default Home