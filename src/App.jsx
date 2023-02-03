import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'



export function App() {

    const format = (userName) => `@${userName}`
    
    
    return (
        <section className='App'>

            <TwitterFollowCard formatUserName={format} initialFollowing={true} userName=" angels36b" name="Angel David" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F40722950%3Fv%3D4&f=1&nofb=1&ipt=ebb6ec9922a2c471bd51919beaff3da36a0c3d32a2a5dff547ec43e3dcbf9b57&ipoimages" />
            <TwitterFollowCard formatUserName={format} isFollowing={false} userName="Miguel_Mart" name="Miguel Martinez" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F215%2Fthumb-1920-215802.jpg&f=1&nofb=1&ipt=4e0a6357f5d5f2cdc3bda80445efb02e578681acb621a355621534398e6919da&ipo=images" />
            <TwitterFollowCard formatUserName={format} isFollowing userName="Fabian_Koreal" name="Fabian correal" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F214-2141249_ultimate-spiderman-png-image-imagen-de-hombre-ara%25C3%25B1a.png&f=1&nofb=1&ipt=7cac53e0c548a3d4aba7ab88bd62d0780b2fce438375d18e4535b36c3845acbe&ipo=images" />

        </section>
    )
}