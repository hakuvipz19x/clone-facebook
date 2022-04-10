

import './HomeNewFeed.scss'
import HomeStory from './HomeStory'
import HomePost from './HomePost'

function HomeNewFeed() {
    return (
        <div className="homepage-newfeed">
            <HomeStory />
            <HomePost />
        </div>
    )
}

export default HomeNewFeed