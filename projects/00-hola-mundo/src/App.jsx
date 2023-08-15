import './App.css'
import { TwiterFolowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdez',
        name: 'Paco Hernandez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas Chein',
        isFollowing: false
    }
]
export function App(){
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwiterFolowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>                        
                        {name}
                    </TwiterFolowCard>
                ))
            }
        </section>
    )
}