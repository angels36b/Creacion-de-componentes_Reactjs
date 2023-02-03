// import react from "@vitejs/plugin-react-swc"

import { useState } from "react"

export function TwitterFollowCard ({userName, name, image, formatUserName, initialFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialFollowing)

   
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'   

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

return(
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' 
            alt="photo Angel" 
            src={image}/>
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
    </article>
)
}