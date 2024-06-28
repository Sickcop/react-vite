import './followCard.styles.css'

export function FollowCard({userName, isfollow, name}) {

  const imgSrc = `https://unavatar.io/${userName}`

  return (
    <article className='general-container'>
      <header className="info-container">
      <img alt="avatar" src={imgSrc} className="avatar"/>
        <div>    
          <h1>{name}</h1>
          <p>@{userName}</p>
        </div>
      </header>
      <button className="btn-follow">Seguir</button>
    </article>
  )
}

export default FollowCard