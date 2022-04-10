
import './Home.scss'
import HomeControl from './HomeControl'
import HomeNewFeed from './HomeNewFeed'
import HomeConnection from './HomeConnection'

function Home() {
    return (
        <div className="homepage">
            <HomeControl/>
            <HomeNewFeed/>
            <HomeConnection/>
        </div>
    )
}

export default Home