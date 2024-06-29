import './followCard.styles.css'
import { useState } from 'react'


export function FollowCard({ userName, name }) {

  const [isFollow, setFollow] = useState(false)
  const [hover, setHover] = useState(false)

  const toggleFollow = ()=>{
    setFollow(!isFollow)
  }

  const hovering = () => {
    setHover(true)
  }

  const leaveHovering = () => {
    setHover(false)
  }

  const text = isFollow? hover? "dejar de seguir" : "siguiendo" : "seguir"
  const btnClass = isFollow? "btn-follow" : "btn-unfollow"

  const imgSrc = `https://unavatar.io/${ userName }`

  return (
    <article className='general-container'>
      <header className="info-container">
      <img alt="avatar" src={ imgSrc } className="avatar"/>
        <div>    
          <h1>{ name }</h1>
          <p>@{ userName }</p>
        </div>
      </header>
      <button onMouseLeave={leaveHovering} onMouseEnter={hovering} onClick={ toggleFollow } className={ btnClass }>{ text }</button>
    </article>
  )
}

export default FollowCard