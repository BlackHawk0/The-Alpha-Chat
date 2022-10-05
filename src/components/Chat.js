import React from 'react'
import Video from '../images/video.png'
import More from '../images/more.png'
import Messages from './Messages'
import InputMessage from './InputMessage'


function Chat() {
  return (
    <div className='chat'>
        <div className="Info">
        <span>John Doe</span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src= {More} alt="" />
        </div>
      </div>
      <Messages />
      <Messages />
      <Messages />
      <Messages />
         
      <InputMessage />
    </div>
  )
}

export default Chat